import React from 'react'
class Streak extends React.Component {
	render() {
		return <div className="streak">
			<h2>{this.props.streakType} Streak:</h2>
			<h3>{this.props.time.days} days</h3>
			<i className="twa twa-lg twa-sparkles" title=":sparkles:"></i>
		</div>
	}
}
export default Streak
