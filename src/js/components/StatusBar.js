import React from 'react'
import ReactDOM from 'react-dom'
import CallActions from '../actions/CallActions';
import  HistorialActions from '../actions/HistorialActions';

export default class StatusBar extends React.Component {

    constructor(props) {
        super(props);
        this.state= {vista:this.props.vista};

        this._onIconClick = this._onIconClick.bind(this);

    }

    _onIconClick(val){
        console.log(val);
        if(val=="Call"){
            console.log("call-act");
            CallActions.call(this.state);

        }else if(val=="Historial") {
            console.log("historial-act");
            HistorialActions.historial(this.state);
        }
    }

    render(){

            if (this.state.vista=="CTICallList")
                return(<div className="row"> <span className="glyphicon glyphicon-question-sign"></span> <span className="glyphicon glyphicon-info-sign"></span>    </div>)
            else
               return( <div className="row"> <span id="home" className="glyphicon glyphicon-home"> </span> <span  id="historial" onClick={this._onIconClick.bind(this,'Historial')} className="glyphicon glyphicon glyphicon-dashboard"></span> <span id="question" className="glyphicon glyphicon-question-sign"></span> <span id="call" onClick={this._onIconClick.bind(this,'Call')}  className="glyphicon glyphicon glyphicon-phone-alt"></span>  <span id="sign" className="glyphicon glyphicon-info-sign"  ></span> </div>)


    }
};