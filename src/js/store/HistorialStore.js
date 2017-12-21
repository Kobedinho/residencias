import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/AppConstants';
import ServerConnection from '../util/ServerConnection';

class HistorialStore extends EventEmitter{

    constructor(){
        super();
        this.socket = ServerConnection._getSocket();
        this.hisData={};
        this.isHistorial = false;
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
    _getHisData(){
        return this.hisData;
    }
    _isHistorial(){
        console.log("HistorialStore is historial ",this.isHistorial);
        return this.isHistorial;
    }

    handleActions(action){
        console.log("accion "+ action.actionType);
        switch(action.actionType) {
            case AppConstants.APP_CHANGE_TO_HISTORIAL:
                console.log("HistorialStore--  -- is historial "+ this.isHistorial);
                console.log("informacion "+ this.isHistorial);
                this.view="Historial" ;
                this.isHistorial=true;
                this.emitChange();
                break;
        }
    }
}

const historialstore = new HistorialStore();

AppDispatcher.register(historialstore.handleActions.bind(historialstore));

export default historialstore;