import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class NavTile extends React.Component {
	render() {
		return <Link className="tile" to={this.props.url}>
			<div className="tile-text">
				{this.props.nextPage}
			</div>
		</Link>
	}
}
export default NavTile
