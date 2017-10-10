
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

var LoginActions = {
	login: function(data) {
	    console.log('KeyboardActions :updateSubject:  ',data);
		AppDispatcher.dispatch({
		    actionType: AppConstants.APP_LOGIN,
		    text: data
	    }); 
	},
	logout: function() {
	    console.log('KeyboardActions :updateSubject: logout');
		AppDispatcher.dispatch({
		    actionType: AppConstants.APP_LOGOUT,
		    text: ''
	    });
	}
};

module.exports = LoginActions;