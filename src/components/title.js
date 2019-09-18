import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
		let listWords = this.props.words.split(" ").map( (word) => {
			return <li className="tile-title-word">{word}</li>
		});
	}

	render() {
		return <div className="tile-title">
			<ul>{listWords}</ul>
		</div>
	}
}
export default Title;
