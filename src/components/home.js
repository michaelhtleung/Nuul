import React from 'react';
import Streak from './streak';
import NavTile from './nav-tile';

var time = {
	current:{
		months: 3,
		days: 20
	},
	best: {
		months: 5,
		days: 14
	}
}

class Home extends React.Component {
	render() {
		return <div className="page">
			<h1>Home</h1>
			<div className="tile">
				<Streak streakType={"Current"} time={time.current} emoji="fire"/>
				<br/>
				<Streak streakType={"Best"} time={time.best} emoji="open-mouth"/>
			</div>
			<div className="nav-tile-wrapper">
				<NavTile nextPage="Data Analysis" url="/data"/>
				<NavTile nextPage="Motivation & Resources" url="/motivation"/>
			</div>
		</div>
	}
}
export default Home
