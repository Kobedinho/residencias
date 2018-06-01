import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';



var CallActions = {
    call: function(data) {
        console.log('CallActions-KeyboardActions :updateSubject:  ',data);
        AppDispatcher.dispatch({
            actionType: AppConstants.APP_CHANGE_TO_CALL,
            text: data
        })
    },

};

module.exports = CallActions;