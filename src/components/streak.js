import React from 'react'

let emojiClass = "twa twa-lg twa-";

class Streak extends React.Component {
	render() {
		return <div className="streak">
			<h2>{this.props.streakType} Streak:</h2>
			<h3>{this.props.time.days} days</h3>
			<i className={emojiClass + this.props.emoji} title={":" + this.props.emoji + ":"}></i>
		</div>
	}
}
export default Streak
