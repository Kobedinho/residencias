import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';



var HistorialActions = {
    historial: function(data) {
        console.log('HistorialActions-KeyboardActions :updateSubject:  ',data);
        AppDispatcher.dispatch({
            actionType: AppConstants.APP_CHANGE_VIEW,
            text: data
        })
    },

};

module.exports =HistorialActions;