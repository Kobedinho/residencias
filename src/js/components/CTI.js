import React from 'react'
import ReactDOM from 'react-dom'
import Historial from "./CTIHistorial";
import Login from "./Login";
import LoginStore from "../store/LoginStore";
import CallStore from "../store/CallStore";
import HistorialStore from "../store/HistorialStore";
import StatusBar from './StatusBar'
import SocketStore from"../store/SocketStore";
import CTICall from "./CTICall";
import CTIClickTCall from "./CTIClickTCall";
import CallingStore from "../store/CallingStore";



export default class CTI extends React.Component{
    constructor (props){
        super(props);
         this.state={"logged":false,view:"",};
        this.handleListener=this.handleListener.bind(this);
        this.handleCallListener=this.handleCallListener.bind(this);
        this.handlehistorialListener=this.handlehistorialListener.bind(this);
        this.handlecallingListener=this.handlecallingListener.bind(this)
    }
    componentDidMount(){
        LoginStore.addChangeListener(this.handleListener);
        CallStore.addChangeListener(this.handleCallListener);
        HistorialStore.addChangeListener(this.handlehistorialListener);
        CallingStore.addChangeListener(this.handlecallingListener);
       this.socket.on('login:reponse', function (data) {
            self.loginData = data;
            if( data.status == 200 && data.sugar_status == 200 ){
                self.isLogged = true;
            }

        });


        this.socket.on('ringing', function () {
            }
            );
        this.socket.on('up', function () {

        });
        this.socket.on('hangup', function () {

        });


    }
    componentWillUnmount(){
        LoginStore.removeChangeListener(this.handleListener);
        CallStore.removeChangeListener(this.handleCallListener);
        HistorialStore.removeChangeListener(this.handlehistorialListener);
        CallingStore.removeChangeListener(this.handlecallingListener);
    }
    handleListener(){
        console.log("LoginStore -- before emit -- is logged ",this.isLogged);
        this.setState({"logged":LoginStore.isLogged});
        console.log("LoginStore -- before emit -- is logged ",this.isLogged);
    }

    handleCallListener(hdl){
        console.log("CTI -- handleCallListener -- is called ",hdl);
        this.setState({"view":CallStore.view});
        console.log("CTI -- handleCallListener -- is called ",hdl);


    }
    handlehistorialListener(){
        console.log("CTI -- before emit -- is historia ",HistorialStore.view);
        this.setState({"view":HistorialStore.view});
        console.log("CTI -- before emit -- is historia ",HistorialStore.view);
    }
    handlecallingListener(){
        console.log("CTI -- before emit -- is cti-call ",CallingStore.view);
        this.setState({"view":CallingStore.view});
        console.log("CTI -- before emit -- is cti-call ",CallingStore.view);
    }



    render(){
    console.log(this.state.view)
      if (this.state.logged){
          switch(this.state.view){

              case "Historial": { return(
                  <div>
                      <Historial/>
                  </div>);
              }; break;

              case "CTIClickTCall": { return(
                  <div>
                      <CTIClickTCall/>
                      <StatusBar b="a"/>
                  </div>);
              }; break;
              case "CTICall": { return(
                  <div>
                      <CTICall/>
                  </div>);
              }; break;

              default : { return(
                  <div>
                      <Historial/>
                  </div>);
              }; break;

          }





      } else {
          return(
              <Login/>
          )
      }

    }



}