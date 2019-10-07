import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const reloadUserData = () => {
	console.log('reload user data');
};

class Achievements extends React.Component {

	render() {
		return <div className="page">
			<h1>{"Accounts".toUpperCase()}</h1>
			<FormControl component="fieldset">
				<FormLabel component="legend"/>
				<RadioGroup name="userID" onChange={reloadUserData}>
					<FormControlLabel value="andy" control={<Radio/>} label="Andy"/>
					<FormControlLabel value="barry" control={<Radio/>} label="Barry"/>
					<FormControlLabel value="cindy" control={<Radio/>} label="Cindy"/>
				</RadioGroup>
			</FormControl>
		</div>
	}
}
export default Achievements
