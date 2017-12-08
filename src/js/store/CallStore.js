import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import ServerConnection from '../util/ServerConnection';

class CallStore extends EventEmitter{

    constructor(){
        super();
        this.socket = ServerConnection._getSocket();
        this.callData={};
        this.isCalled = false;
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
    _getCallData(){
        return this.callData;
    }
    _isCalled(){
        console.log("CallStore is called ",this.isCalled);
        return this.isCalled;
    }
    handleActions(action){
        switch(action.actionType) {
            case AppConstants.APP_CHANGE_VIEW:
                console.log("CallStore -- before emit -- is called ",this.isCalled);
                this.view="CTIClickTCall" ;
                this.isCalled=true;
                this.emitChange();
                break;
        }
    }
}

const callStore = new CallStore;

AppDispatcher.register(callStore.handleActions.bind(callStore));

export default callStore;