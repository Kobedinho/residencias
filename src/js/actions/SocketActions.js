import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';


var SocketActions ={
    socket:function (data) {
        console.log('SocketActions-KeyboardActions :updateSubject:  ',data);
        AppDispatcher.dispatch({
            actionType: AppConstants.APP_CHANGE_TO_SOCKET,
            text: data
        })

    }
}
module.exports =SocketActions;