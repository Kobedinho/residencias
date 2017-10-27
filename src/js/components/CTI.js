import React from 'react'
import ReactDOM from 'react-dom'
import  Caller from './Caller'
import StatusBar from "./StatusBar";
import  CallerList from "./CallerList";

export  default  class CTI extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {callers: [{ type:"2455662065651",nombre:"Juan"},
            {type:"2455662065651",nombre:"Juan"},{type:"2455662065651",nombre:"Juan"},]};
        if (this.props.callers) {
            this.state = {callers: this.props.callers};
        }
        this._getCaller = this._getCaller.bind(this);
    }
    render(){
        var todo = [];
        if(!$.isEmptyObject(this.state.callers)){
            for(var key in this.state.callers){
                todo.push(<Caller key={key} caller={this.state.callers[key]}/>);
            }
            return(
                <div id="CallerList" className="row">
                    <ul id="caller-list" className="row">{todo}</ul>
                </div>
            )
        }
        else{
            return(
                <div id="CallerList" className="row">
                    <ul id="caller-list" className="row"><li><span className="glyphicon glyphicon-warning-sign"></span>
                        Error.....</li></ul>

                </div>
            )
        }

    }
    _getCaller()
    {
        this.setState({callers: Historial._getCaller()});
    }







    render(){
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
            <br />
            <div className="input-group-btn">

                <input  type="text" className="form-control"  placeholder="Titulo"aria-describedby="sizing-addon1"/>
            </div>
            <br/>
            <br />
            <div className="item">

                <textarea className="comentarios" placeholder="Detalles"rows="10" cols="40"></textarea>
                <button className="btn-primary" type="button">Terminar</button>
            </div>
            <br/>
            <StatusBar vista="m"/>




        </div>;

    }






}