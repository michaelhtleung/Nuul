import React from 'react';

class FooterIcon extends React.Component {
	render() {
		return <div className="iconCircle">
			<img src={this.props.filePath} alt="footer"/>
		</div>
	}
}
export default FooterIcon;
