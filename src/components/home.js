import React from 'react'
import Streak from './streak'

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
				<Streak streakType={"Current"} time={time.current}/>
				<Streak streakType={"Best"} time={time.best}/>
			</div>
		</div>
	}
}
export default Home
