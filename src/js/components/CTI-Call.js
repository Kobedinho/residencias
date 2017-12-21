import React from 'react'
import ReactDOM from 'react-dom'
import  Caller from './CTICaller'
import StatusBar from "./StatusBar";
import  CallerList from "./CtiList";

import CTISearch from "./CTISearch";
import CTITimeline from "./CTITimeline"


export  default  class CTICall extends React.Component{
    constructor(props){
        super(props)


    }




    render(){

        return(

            <div>
                    <CTISearch vista="z"/>
                <br/>
                    <CallerList  todo="C"/>

                     <CTITimeline vista="w"/>

                     <CTIC vista="r"/>


                        <StatusBar />
                </div>

                )

    }



}