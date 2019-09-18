import React from 'react';
import Streak from './streak';
import TileTitle from './tile-title';
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme, VictoryLabel} from 'victory';

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

class Home extends React.Component {
	render() {
		return <div className="page">
			<h1>Nuul</h1>
			<div className="tile">
				<Title words="Current Streak"/>
				<TileTitle word="Current"/>
				<TileTitle word="Streak"/>
				<div className="tile-title">

				</div>
				<Streak time={time.current} emoji="fire"/>
				<TileTitle word="Best"/>
				<TileTitle word="Streak"/>
				<Streak time={time.best} emoji="open-mouth"/>
			</div>
			<div className="tile">
				<h2 className="chartTitle">{'Daily Frequency'.toUpperCase()}</h2>
				<VictoryChart
					domainPadding={20}
					theme={VictoryTheme.material}
					height={300}
				>
					<VictoryAxis
						tickValues={weekday}
						label={"Day of the Week"}
					/>
					<VictoryAxis
						dependentAxis
						tickFormat={x => x}
						label={"Times smoked"}
					/>
					<VictoryBar data={aggregateByDays} x={"day"} y={"frequency"}/>
				</VictoryChart>
			</div>
		</div>
	}
}
export default Home
