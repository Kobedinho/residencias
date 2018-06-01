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
    componentDidMount(){
        $(this.refs.info).tooltip();
        $(this.refs.sin).tooltip();



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

            if (this.state.vista=="Login")
                return(<div className="row"> <span className="glyphicon glyphicon-question-sign"
                       href="#" data-toggle="tooltip" data-placement="top" title="Action2.0 fabricante MERXBP todos los derechos reservados" >

                </span>
                    <span className="glyphicon glyphicon-info-sign"
                     href="#" data-toggle="tooltip" data-placement="top" title="Soporte MERXBP">

                    </span>   </div>)
            else

               return( <div className="row">
                   <span  id="historial" onClick={this._onIconClick.bind(this,'Historial')} className="glyphicon glyphicon glyphicon-dashboard">

                   </span>
                   <span  className="glyphicon glyphicon-question-sign" ref="sin" href="#" data-toggle="tooltip" data-placement="top" title="Action2.0 fabricante MERXBP todos los derechos reservados" >

                   </span >

                   <span id="call" onClick={this._onIconClick.bind(this,'Call')}  className="glyphicon glyphicon glyphicon-phone-alt">

                   </span>
                   <span id="sign" className="glyphicon glyphicon-info-sign" ref="info" href="#" data-toggle="tooltip" data-placement="top" title="Soporte MERXBP"  >

                   </span> </div>)


    }
};