import React from 'react';
import axios from 'axios';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryStack} from 'victory';

/*custom components*/
import Streak from './streak';
import TileTitle from './tile-title';

var time = {
	current:{
		months: 3,
		days: 20
	},
	best: {
		months: 5,
		days: 14
	}
};

const weekday = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			aggregationByDays: [ ]
		};
		// axios.get('http://localhost:5000/view/graphData/michael')
		// 	.then(response => {
		// 		response.data.forEach(value => {
		// 			this.state.aggregationByDays.push({y: value})
		// 		});
		// 		this.state.aggregationByDays.forEach( (dayElement, dayIndex) => {
		// 			dayElement.x = weekday[dayIndex];
		// 		});
		// 		debugger;
		// 	})
		// 	.catch( error => {
		// 		console.log(error);
		// 	});
	};

	componentDidMount() {
		axios.get('http://localhost:5000/view/graphData/michael')
			.then(response => {
				let daysArray = [];
				response.data.forEach(value => {
					daysArray.push({y: value})
				});
				daysArray.forEach( (dayElement, dayIndex) => {
					dayElement.x = weekday[dayIndex];
				});
				this.setState({
					aggregationByDays: daysArray
				});
				debugger;
			})
			.catch( error => {
				console.log(error);
			});
	};

	render() {
		return <div className="page">
			<h1>{'Nuul'.toUpperCase()}</h1>
			<div className="page-content">
				<div className="tile">
					<div className="tile-title">
						<TileTitle word="Current"/>
						<TileTitle word="Streak"/>
					</div>
					<Streak time={time.current} emoji="fire"/>
					<TileTitle word="Best"/>
					<TileTitle word="Streak"/>
					<Streak time={time.best} emoji="open-mouth"/>
					<br/>
				</div>
				<div className="tile bottom-tile">
					<div className="tile-title">
						<TileTitle word="Daily"/>
						<TileTitle word="Frequency"/>
					</div>
					<VictoryChart domainPadding={20} height={300} >
						<VictoryAxis
							tickValues={weekday}
							label={"Day of the Week"}
						/>
						<VictoryAxis
							dependentAxis
							tickFormat={y => y}
							label={"Times smoked"}
						/>
						<VictoryStack colorScale={["#967BB6"]} >
						<VictoryBar data={ this.state.aggregationByDays } x="x" y="y"/>
						</VictoryStack>
					</VictoryChart>
				</div>
			</div>
		</div>
	};
}
export default HomePage
