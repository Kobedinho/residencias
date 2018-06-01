import React from 'react'
import ReactDOM from 'react-dom'
class ServerConnection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logIn: false,
            connected: false
        };
        this.socketUrl= 'http://merx-pbx-gateway-event-manager.herokuapp.com/';
        this.socket = io.connect(this.socketUrl);

        this._isConnected = this._isConnected.bind(this);
        this._isLogin = this._isLogin.bind(this);
        this._disconnect = this._disconnect.bind(this);
        this._getSocket = this._getSocket.bind(this);
    }
    _isConnected(){
        return this.state.connected;
    }
    _isLogin(){
        return this.state.logIn;
    }
    _disconnect(){
        this.socket.on('disconnect', function (data) {

            console.log('Got disconnect!')
        });


        this.socket.close();

    }
    _getSocket(){
        return this.socket;
    }
}

const SrvrConnection = new ServerConnection;

export default SrvrConnection;