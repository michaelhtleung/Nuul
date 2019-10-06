import React from 'react';
import Streak from './streak';
import TileTitle from './tile-title';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryStack} from 'victory';

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

var weekday = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

var aggregateByDays = [
	{frequency: 10},
	{frequency: 20},
	{frequency: 15},
	{frequency: 30},
	{frequency: 3},
	{frequency: 50},
	{frequency: 8},
];

aggregateByDays.forEach( (dayElement, dayIndex) => {
	dayElement.day = weekday[dayIndex];
});

class HomePage extends React.Component {
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
						<VictoryBar data={aggregateByDays} x={"day"} y={"frequency"}/>
						</VictoryStack>
					</VictoryChart>
				</div>
			</div>
		</div>
	}
}
export default HomePage
