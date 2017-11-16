import React from 'react'
import ReactDOM from 'react-dom'
import  Caller from './CTIListCaller'
import StatusBar from "./StatusBar";
import  CallerList from "./CtiList";


export default  class CTICaller extends  React.Component{
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

                <br/>
                    <div>
                        <CallerList  todo="C"/>
                        <StatusBar vista="m"/>
                    </div>
                </div>


            );

        }

    }
    _getCaller()
    {
        this.setState({callers: Historial._getCaller()});
    }
}