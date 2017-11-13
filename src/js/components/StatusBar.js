import React from 'react'
import ReactDOM from 'react-dom'


export default class StatusBar extends React.Component {

    constructor(props) {
        super(props);
        this.state= {vista:this.props.vista};



    }

    render(){

            if (this.state.vista=="CtiHistorial")
                return(<div className="row"> <span className="glyphicon glyphicon-question-sign"></span> <span className="glyphicon glyphicon-info-sign"></span>    </div>)
            else
               return( <div className="row"> <span className="glyphicon glyphicon-home"> </span> <span className="glyphicon glyphicon glyphicon-dashboard"></span> <span className="glyphicon glyphicon glyphicon-phone-alt"></span> <span className="glyphicon glyphicon-question-sign"></span> <span className="glyphicon glyphicon-info-sign"></span> </div>)

    }
};