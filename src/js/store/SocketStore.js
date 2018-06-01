/*import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import ServerConnection from '../util/ServerConnection';

class SocketStore extends EventEmitter{
    constructor(){
        super();
        this.socket = ServerConnection._getSocket();
        this.SoData={};
        this.isSocket = false;
    }
}

emitChange() {
    this.emit(this.CHANGE_EVENT);
}
addChangeListener(callback) {
    this.on(this.CHANGE_EVENT, callback);
}
_getSoData(){
    return this.SoData;
}
_isSocket(){
    console.log("SocketStore is socket ",this.isSocket);
    return this.isSocket;
}
handleActions(action)
{
    var text;
    switch (action.actionType) {
        case AppConstants.APP_RINGING:

            console.log("SocketStore -- before emit -- is socket ", this.isSocket);
            this.isSocket = true;
            this.emitChange();
            break;
        case AppConstants.APP_HANGUP:
            this.SoData = {};
            this.emitChange();
            break;
        default:
    }
}
const socketStore = new SocketStore();

AppDispatcher.register(socketStore.handleActions.bind(socketStore));
export  default socketStore;



*/