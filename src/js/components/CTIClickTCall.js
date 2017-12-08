import React from 'react';
import ReactDOM from 'react-dom';
import  CtiKeyboard from './CtiKeyboard'
import StatusBar from "./StatusBar";
import Caller from "./CTICaller";
import  CtiList from "./CtiList"




export default class CTIClickTCall extends React.Component {
    constructor(props) {
        super(props);


    }
        render()
        {

            return (
                <div>

                    <CtiList a="q"/>


                    <CtiKeyboard v="m"/>






                </div>





            )
        }

}
