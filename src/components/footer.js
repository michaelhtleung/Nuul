import React from 'react';
import home from '../img/home.svg';
import achievements from '../img/achievements.svg';
import account from '../img/account.svg';

class Footer extends React.Component {
	render() {
		return <div>
			<img src={home} alt="home"/>
			<img src={achievements} alt="achievements"/>
			<img src={account} alt="account"/>
		</div>
	}
}
export default Footer
