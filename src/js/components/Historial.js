import React from 'react'
import ReactDOM from 'react-dom'
import StatusBar from "./StatusBar";
import  CallerList from "./CallerList";



export default class Historial extends React.Component {

    constructor(props) {
        super(props);

    }

    render (){
        return <div className="row">
            <div className="col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
      </span>
                </div>
                <span className="glyphicon glyphicon-earphone" ></span>

                <br />

            </div>

            <br/>


            <CallerList  todo="C"/>
            <StatusBar vista="m"/>
        </div>

    }
}