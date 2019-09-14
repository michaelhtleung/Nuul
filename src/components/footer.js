import React from 'react';
import FooterIcon from './footer-icon.js';

import home from '../img/home.svg';
import achievements from '../img/achievements.svg';
import account from '../img/account.svg';


class Footer extends React.Component {
	render() {
		return <footer className="footer">
			<FooterIcon filePath={home}/>
			<FooterIcon filePath={achievements}/>
			<FooterIcon filePath={account}/>
		</footer>
	}
}
export default Footer
