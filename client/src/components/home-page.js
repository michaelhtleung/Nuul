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
		// axios.get('http://localhost:5000/view/achievementsData/michael')
		axios.get('http://localhost:5000/view/graphData/michael')
			.then(response => {
				console.log(response);
			})
			.catch( error => {
				console.log(error);
			});
		this.state = {
			aggregateByDays: [
				{frequency: 10},
				{frequency: 20},
				{frequency: 15},
				{frequency: 30},
				{frequency: 3},
				{frequency: 50},
				{frequency: 8}
			]
		};
		this.state.aggregateByDays.forEach( (dayElement, dayIndex) => {
			dayElement.day = weekday[dayIndex];
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
							tickFormat={x => x}
							label={"Times smoked"}
						/>
						<VictoryStack colorScale={["#967BB6"]} >
						<VictoryBar data={this.state.aggregateByDays} x={"day"} y={"frequency"}/>
						</VictoryStack>
					</VictoryChart>
				</div>
			</div>
		</div>
	};
}
export default HomePage
