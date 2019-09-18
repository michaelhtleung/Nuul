import React from 'react';

class TileTitle extends React.Component {
	render() {
		return <div className="tile-title-word">
			{this.props.word.toUpperCase()}
		</div>
	}
}
export default TileTitle;
