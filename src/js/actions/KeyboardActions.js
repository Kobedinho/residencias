import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';



var KeyboardActions = {
    keyboard: function(data) {
        console.log('KeyboardActions-KeyboardActions :updateSubject:  ',data);
        AppDispatcher.dispatch({
            actionType: AppConstants.APP_CHANGE_TO_KEYBOARD,
            text: data
        })
    },

};

module.exports =KeyboardActions;