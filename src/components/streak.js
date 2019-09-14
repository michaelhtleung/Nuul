import React from 'react'
class Streak extends React.Component {
	render() {
		return <div className="streak">
			<h2>{this.props.streakType} Streak:</h2>
			<h3>{this.props.time.months}</h3>
			<h3>{this.props.time.days}</h3>
		</div>
	}
}
export default Streak
