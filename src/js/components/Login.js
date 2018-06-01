import React from 'react'
import ReactDOM from 'react-dom'
/*import LoginStore from '../store/LoginStore';*/
import LoginActions from '../actions/LoginActions';
import TextInput from './TextInput';
import StatusBar from "./StatusBar";
/*import AppConstants from '../constants/AppConstants';*/

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.pbxUserKey = '83ba3294-350d-11e4-bf3a-2ac56a401232';
		this._onLogin = this._onLogin.bind(this);

		this.state = {url: '', username:'', password: '',key: this.pbxUserKey};

	}

    _onLogin(){
		LoginActions.login(this.state); //detonando el evento login/
	}

	render() {
		return (
			<div>
			<form className="form-horizontal" role="form">
				<br />
		      	<br />


				<br />
				<div className="input-group">
					<span className="input-group-addon glyphicon glyphicon-user" id="sizing-addon1"></span>
					<input id="user" name="user" type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon1"/>
				</div>
				<br />
				<div className="input-group">
					<span className="input-group-addon glyphicon glyphicon-globe" id="sizing-addon1"></span>
					<input id="url" name="url" type="text" className="form-control" placeholder="URL" aria-describedby="sizing-addon1"/>
				</div>
				<br />
				<div className="input-group">
					<span className=" input-group-addon glyphicon glyphicon-lock" id="sizing-addon1"></span>
					<input id="password" name="password" type="password" className="form-control" placeholder="Password" aria-describedby="sizing-addon1"/>
					<br />
				</div>
				<br />
			  	<div className="form-group">
			    	<div className="col-sm-offset-2 col-sm-10">
			      		<button type="button" onClick={this._onLogin} className="btn btn-primary " >Entrar</button>
					</div>
			  	</div>
			</form>
			<StatusBar vista="Login"/>

				</div>
		)
	}
}