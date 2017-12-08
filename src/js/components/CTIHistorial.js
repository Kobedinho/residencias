import React from 'react'
import ReactDOM from 'react-dom'
import CTICallList from './CTICallList'
import StatusBar from "./StatusBar";
import  CallerList from "./CtiList";


export default class Historial extends  React.Component{
    constructor(props){
        super(props);

    }


    render (){
        return(
        <div>
            <CTICallList vista="H"/>

                 <CallerList todo ="c"/>

                     <StatusBar vista="CTIClickTCall"/>


        </div>);

    }
}