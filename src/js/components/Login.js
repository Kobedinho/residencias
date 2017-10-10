import React from 'react'
import ReactDOM from 'react-dom'
import LoginStore from '../store/LoginStore';
import LoginActions from '../actions/LoginActions';
import TextInput from './TextInput';
import AppConstants from '../constants/AppConstants';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.pbxUserKey = '83ba3294-350d-11e4-bf3a-2ac56a401232';
		this._onLogin = this._onLogin.bind(this);

		this.state = {url: '', username:'', password: ''};
	}
	_onLogin() {
		debugger;
		console.log("Me logueo");
		LoginActions.login({ 'key': this.pbxUserKey });	// despues de logearse con sugar se emite el login al socket con el pbxkey del usuarios logeado	

		/*ReactDOM.render(
			<AppPane />,			
			document.getElementById('app')
		);*/
		/*fetch(AppConstants.APP_URL_API, {
		  method: 'POST',*/
		  /*headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },*/
		  /*body: JSON.stringify({
		    url: $("#url").val(),
		    username: $("#username").val(),
		    password: $("#password").val()
		  }),
		  then( 
		  			(response) => {
		  				debugger;
		   				console.log(response); 
		   			} 
		   )
		})*/
		/*const BASE_URL = AppConstants.APP_URL_API;
		fetch(`${AppConstants.APP_URL_API}`, {
			method: 'POST', 
			mode: 'no-cors', 
			redirect: 'follow',
			headers: new Headers({
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': `${AppConstants.APP_URL_API}`
			}),
			body: 
					JSON.stringify(
					{
		    			url: $("#url").val(),
		    			username: $("#username").val(),
		    			password: $("#password").val()
		  			})
		}).then(function(data) { debugger;
		   				console.log(data); 
		 });*/
	}

	render() {
		return (
			<form className="form-horizontal" role="form">
				<br />
		      	<br />
			  	<div className="form-group">
			    	<label className="control-label col-sm-2" >Url:</label>
			    	<div className="col-sm-10">			      		
			      		<TextInput
							type="url"
				          	placeholder="Url"
				          	id="url"
				          	required={true}
				          	errorMessage="Url is invalid"
							emptyMessage="Url is required" />
			    	</div>
			  	</div>
			  	<div className="form-group">
			    	<label className="control-label col-sm-2" >Username:</label>
			    	<div className="col-sm-10">			      		
			      		<TextInput
							type="text"
				          	placeholder="Username"
				          	id="username"
				          	required={true}
				          	errorMessage="Username is invalid"
							emptyMessage="Username is required" />
			    	</div>
			  	</div>
			  	<div className="form-group">
			    	<label className="control-label col-sm-2" >Password:</label>
			    	<div className="col-sm-10">			    		
			    		<TextInput
							type="password"
				          	placeholder="Password"
				          	id="password"
				          	required={true}
				          	errorMessage="Password is invalid"
							emptyMessage="Password is required" />
			    	</div>
		  		</div>
			  	<div className="form-group">
			    	<div className="col-sm-offset-2 col-sm-10">
			      		<button type="button" onClick={this._onLogin} className="btn btn-default">Entrar</button>
			    	</div>			    	
			  	</div>

			  	
			</form>
		)
	}
}