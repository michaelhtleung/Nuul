import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class NavTile extends React.Component {
	render() {
		return <div className="tile">
			<Link to={this.props.url}>
				{this.props.nextPage}
			</Link>
		</div>
	}
}
export default NavTile
