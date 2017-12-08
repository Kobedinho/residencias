import React from 'react'
import ReactDOM from 'react-dom'
import Historial from "./CTIHistorial";
import Login from "./Login";
import LoginStore from "../store/LoginStore";
import CallStore from "../store/CallStore";
import HistorialStore from "../store/HistorialStore";
import StatusBar from './StatusBar'

import CTICall from "./CTI-Call";
import CTIClickTCall from "./CTIClickTCall";



export default class CTI extends React.Component{
    constructor (props){
        super(props);
         this.state={"logged":false,view:"Historial",};
        this.handleListener=this.handleListener.bind(this);
        this.handleCallListener=this.handleCallListener.bind(this);
        //this.handlehistorialListener=this.handlehistorialListener.bind(this);
    }
    componentDidMount(){
        LoginStore.addChangeListener(this.handleListener);
        CallStore.addChangeListener(this.handleCallListener);
        //HistorialStore.addChangeListener(this.handlehistorialListener)
    }
    componentWillUnmount(){
        LoginStore.removeChangeListener(this.handleListener);
        CallStore.removeChangeListener(this.handleCallListener);
        //HistorialStore.removeChangeListener(this.handlehistorialListener);

    }
    handleListener(){
        console.log("LoginStore -- before emit -- is logged ",this.isLogged);
        this.setState({"logged":LoginStore.isLogged});
        console.log("LoginStore -- before emit -- is logged ",this.isLogged);
    }

    handleCallListener(hdl){
        console.log("CTI -- before emit -- is called ",hdl);
        this.setState({"view":CallStore.view});
        console.log("CTI -- before emit -- is called ",hdl);


    }
    /*handlehistorialListener(){
        console.log("CTI -- before emit -- is historia ",HistoriaStore.view);
        this.setState({"view":HistoriaStore.view});
        console.log("CTI -- before emit -- is historia ",HistoriaStore.view);


    }*/



    render(){

      if (this.state.logged){
          switch(this.state.view){
              case "CTI-Call": { return(
                      <div>
                          <CTICall/>
                      </div>);
                    }; break;
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