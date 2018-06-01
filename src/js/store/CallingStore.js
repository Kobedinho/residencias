import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import ServerConnection from '../util/ServerConnection';

class CallingStore extends EventEmitter{

    constructor(){
        super();
        this.socket = ServerConnection._getSocket();
        this.callingData={};
        this.isling = false;
    }
    emitChange() {
        this.emit(this.CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(this.CHANGE_EVENT, callback);
    }
    _getCallData(){
        return this.callingData;
    }
    _isling(){
        console.log("CallingStore is Calling ",this.isling);
        return this.isling;
    }

    handleActions(action){

        switch(action.actionType) {
            case AppConstants.APP_CHANGE_TO_CTICALL:
                console.log("CallingStore--  -- is calling "+ this.isling);
                console.log("llamada "+ this.isling);
                this.view="CTICall" ;
                this.isling=true;
                this.emitChange();
                break;
        }
    }
}

const callingstore = new CallingStore();

AppDispatcher.register(callingstore.handleActions.bind(callingstore));

export default callingstore;