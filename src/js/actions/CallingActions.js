import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';



var CallingActions = {
    Calling: function(data) {
        console.log('CallingActions-CallingActions :updateSubject:  ',data);
        AppDispatcher.dispatch({
            actionType: AppConstants.APP_CHANGE_TO_CTICALL,
            text: data
        })
    },

};

module.exports =CallingActions;