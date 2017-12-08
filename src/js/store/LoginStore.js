import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import ServerConnection from '../util/ServerConnection';

 class LoginStore extends EventEmitter{

	constructor(){
		super();
		this.socket = ServerConnection._getSocket();
		this.loginData={};
		this.isLogged = false;
	}
	emitChange() {
		this.emit(this.CHANGE_EVENT);
	}
	/**
	* @param {function} callback
	*/
	addChangeListener(callback) {
		this.on(this.CHANGE_EVENT, callback);
	}
	/**
	* @param {function} callback
	*/
	removeChangeListener(callback) {
		this.removeListener(this.CHANGE_EVENT, callback);
	}
	_getLoginData(){
		return this.loginData;
	}
	_isLogged(){
		console.log("LoginStore is logged ",this.isLogged);
		return this.isLogged;
	}
	handleActions(action){
		var text;
		switch(action.actionType) {
		    case AppConstants.APP_LOGIN:
		    	/*this.socket.emit('login', action.text);
		    	var self = this;
		    	this.socket.on('login:reponse', function (data) {
					self.loginData = data;
					if( data.status == 200 && data.sugar_status == 200 ){
            			self.isLogged = true;
        			}
        			console.log("LoginStore -- before emit -- is logged ",this.isLogged);
					self.emitChange();
				});*/
                console.log("LoginStore -- before emit -- is logged ",this.isLogged);
		    	this.isLogged =true;
		    	this.emitChange();
		      	break;
		    case AppConstants.APP_LOGOUT:
		    	this.loginData={};
		    	this.emitChange();
		      	break;
		    default:
	  	}
	}
}

const loginStore = new LoginStore;
// Register callback to handle all updates
AppDispatcher.register(loginStore.handleActions.bind(loginStore));

export default loginStore;