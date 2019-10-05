import React from 'react'

let emojiClass = "twa twa-lg twa-";

class Streak extends React.Component {
	render() {
		return <div className="streak">
			<h3>{this.props.time.days} {'days'.toUpperCase()}
				<i className={emojiClass + this.props.emoji} title={":" + this.props.emoji + ":"}></i>
			</h3>
		</div>
	}
}
export default Streak
