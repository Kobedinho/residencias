import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import ServerConnection from '../util/ServerConnection';

class KeyboardStore extends EventEmitter{

    constructor(){
        super();
        this.socket = ServerConnection._getSocket();
        this.keyData={};
        this.isBoard = false;
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
    _getKeyData(){
        return this.keyData;
    }
    _isBoard(){
        console.log("KeyboardStore is keyboard ",this.isBoard);
        return this.isBoard;
    }

    handleActions(action){
        console.log("accion "+ action.actionType);
        switch(action.actionType) {
            case AppConstants.APP_CHANGE_TO_KEYBOARD:
                console.log("KeyboardStore--  -- is keyboard "+ this.isBoard);
                console.log("informacion "+ this.isBoard);
                this.view="Keyboard" ;
                this.isBoard=true;
                this.emitChange();
                break;
        }
    }
}

const keyboardstore = new KeyboardStore();

AppDispatcher.register(keyboardstore.handleActions.bind(keyboardstore));

export default keyboardstore;