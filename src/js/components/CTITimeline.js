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
                title: '<table border="1"><tr><td>Tarea2018-01-27-</td><td>realizar correciones</td></tr></table>',
                start:'Tarea 2018-01-27'
            },
            {
                id: 2,
                content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-25</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea 2018-01-25'
            },
            {
                id: 3,
                content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-23</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea2018-01-23'
            },
            {
                id: 4,
                content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-22</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea2018-01-22'
            },
            {
                id: 5,
                content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-26</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea2018-01-26'
            },
            {
                id: 6,
                content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-23</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea2018-01-23'
            },
            {
                id: 7,
                content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-26</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea2018-01-26'
            },
            {
                id: 8,
                content: '<img src="dist/imagen/reunion.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-21</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea2018-01-21'
            },
            {
                id: 9,
                content: '<img src="dist/imagen/llamada.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-22</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea2018-01-22'
            },
            {
                id: 10,
                content: '<img src="dist/imagen/tarea.jpg" style="width:14px; height:14px;">',
                title: '<table border="1"><tr><td>Tarea2018-01-22</td><td>realizar correciones</td></tr></table>',
                start: 'Tarea2018-01-22'
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