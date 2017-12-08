import React from 'react'
import ReactDOM from 'react-dom'


export  default  class CTITimeline extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            callers: [{type: "2455662065651", nombre: "Juan"},
                {type: "2455662065651", nombre: "Juan"}, {type: "2455662065651", nombre: "Juan"},]
        };
        if (this.props.callers) {
            this.state = {callers: this.props.callers};
        }
        this._getCaller = this._getCaller.bind(this);
    }

    _getCaller() {
        this.setState({callers: Historial._getCaller()});
    }


    componentDidMount() {
        // DOM elemgient where the Timeline will be attached
        var container = document.getElementById('timeline-embed');

        // Create a DataSet (allows two way data-binding)
        var items = new vis.DataSet([

            {
                id: 1,
                content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-29'
            },
            {
                id: 2,
                content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-28'
            },
            {
                id: 3,
                content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>reunion2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-27'
            },
            {
                id: 4,
                content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>reunion2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-29'
            },
            {
                id: 5,
                content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>llamada2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-28'
            },
            {
                id: 6,
                content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-28'
            },
            {
                id: 7,
                content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>llamada2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-29'
            },
            {
                id: 8,
                content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>reunion2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-29'
            },
            {
                id: 9,
                content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>llamada2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-28'
            },
            {
                id: 10,
                content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2017-11-8</td><td>realizar correciones</td></tr></table>',
                start: '2017-11-29'
            }
        ]);

        // Configuration for the Timeline
        var options = {
            showCurrentTime: true,
            start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
            end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
            min: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
            max: new Date(Date.now() + 1000 * 60 * 60 * 24 * 4),
            tooltip: {
                followMouse: true
            }
        };

        // Create a Timeline
        var timeline = new vis.Timeline(container, items, options);


    }


    render() {

        return(
            <div className="row">

                <div id='timeline-embed' style={{width: '100%', height: '200px', overflow: 'auto',}}>

                </div>


            </div>

        )
    }


}