import React from 'react'
import ReactDOM from 'react-dom'
import  Caller from './Caller'
import StatusBar from "./StatusBar";
import  CallerList from "./CtiList";
import  CTIC from  "./CTIC"

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
        // DOM element where the Timeline will be attached
        var container = document.getElementById('timeline-embed');

        // Create a DataSet (allows two way data-binding)
        var items = new vis.DataSet([

            {id: 1, content:'<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">' ,title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',start: '2017-11-9'},
            {id: 2, content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>', start: '2017-11-9'},
            {id: 3, content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">',title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>', start: '2017-11-8'},
            {id: 4, content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">', title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',start: '2017-11-8'},
            {id: 5, content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">', title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',start: '2017-11-9'},
            {id: 6, content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>', start: '2017-11-9'},
            {id: 7, content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">',title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>' ,start: '2017-11-9'},
            {id: 8, content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">', title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',start: '2017-11-9'},
            {id: 9, content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">',title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>', start: '2017-11-9'},
            {id: 10, content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">', title:'<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',start: '2017-11-9'}
        ]);

        // Configuration for the Timeline
        var options = {
            showCurrentTime: true,
            start: new Date(Date.now() - 1000 * 60 * 60 * 24*3),
            end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
            min: new Date(Date.now()- 1000 *60 *60 *24*4),
            max:new Date(Date.now() + 1000 *60 *60 *24 *4),
            tooltip: {
                followMouse: true
            }
        };

        // Create a Timeline
        var timeline = new vis.Timeline(container, items, options);


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
                    <CTIC vista="r"/>
                    <br />

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

                    <CTIC vista="r"/>
                    <StatusBar vista="m"/>
                </div>
            )

    }






}