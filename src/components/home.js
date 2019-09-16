import React from 'react';
import Streak from './streak';
import {VictoryChart, VictoryBar, VictoryAxis} from 'victory';

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
	{frequency: 15},
	{frequency: 20},
	{frequency: 30},
	{frequency: 3},
	{frequency: 50},
	{frequency: 8},
];

aggregateByDays.forEach( (dayElement, dayIndex) => {
	dayElement.day = weekday[dayIndex];
});

console.log(aggregateByDays);

class Home extends React.Component {
	render() {
		return <div className="page">
			<h1>Home</h1>
			<div className="tile">
				<Streak streakType={"Current"} time={time.current} emoji="fire"/>
				<br/>
				<Streak streakType={"Best"} time={time.best} emoji="open-mouth"/>
			</div>
			<div className="tile">
				<VictoryBar data={aggregateByDays} x={"day"} y={"frequency"}/>
			</div>
		</div>
	}
}
export default Home
