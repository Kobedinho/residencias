import React from 'react';
import ReactDOM from 'react-dom';
import  CtiKeyboard from './CtiKeyboard'
import StatusBar from "./StatusBar";
import Caller from "./CTIListCaller";
import  CtiList from "./CtiList"




export default class ClickTCall extends React.Component {
    constructor(props) {
        super(props);

    }
        render()
        {

            return (
                <div>



                    <CtiList a="q"/>


                    <CtiKeyboard v="m"/>

                     <StatusBar b="a"/>




                </div>





            )
        }

}
