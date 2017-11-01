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
    componentDidMount()
    {
        var Timeline1=[];
        debugger;
        Timeline1 = new TL.Timeline('timeline-embed',Timeline1);

    }

    _getCaller()
    {
        this.setState({callers: Historial._getCaller()});
    }







    render()
        {

            return (
                <div className="row">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="input-group ">
                            <input type="text" className="form-control" placeholder="search" aria-describedby="basic-addon2"/>
                            <span className="input-group-addon glyphicon glyphicon-search " id="basic-addon2" > </span>
                        </div>
                    </div>



      <div className="col-md-2">
                        <div> 1:20 </div>
                    </div>
                    <div className="col-md-1">
                        <span className="glyphicon glyphicon-earphone"></span>
                    </div>
                    <div className="col-md-1">

                    </div>


                </div>
                    <CallerList  todo="C"/>
                    <br />
                    <div className="row">
                        <div id='timeline-embed' style={{width: '200%', height:'100px', overflow:'auto', }}></div>


                    </div>
                    <div>
                        <input  type="text" className="form-control"  placeholder="Titulo"aria-describedby="sizing-addon1"/>
                    </div>
                    <br/>
                    <br />
                    <div className="item">
                        <textarea className="comentarios" placeholder="Detalles"rows="10" cols="40"></textarea>

                            </div>
                            <div><button className="btn-primary" type="button"    >Terminar</button>
                            </div>
                    <br/>

                    <StatusBar vista="m"/>
                </div>
            )

    }






}