import React from 'react'
import ReactDOM from 'react-dom'

export default  class CTICaller extends React.Component{
    constructor(props){
        super(props);
        this.displayName = 'Caller';


    }
    componentDidMount(){
        $(this.refs.info).tooltip();


    }
    render(){
        var caller =this.props.caller;
        var style ={marginLeft:"1em"};

        return(

            <div className="row">
            <div className="col-md-2"><input name="selecion" type="radio" value="a" /></div>
            <div className="col-md-2"><span className="glyphicon glyphicon-user"></span></div>
            <div className="col-md-6"> {caller.nombre}    {caller.type}</div>
            <div className="col-md-2"> <span className="glyphicon glyphicon-info-sign" ref="info" href="#" data-toggle="tooltip" data-placement="top" title="Soporte MERXBP"></span> </div>
            <span style={style} className="list"></span>

            <div className="row">

                <div className="row">

                </div>

            </div>

        <div>
            </div>
            </div>
        )

    }

}