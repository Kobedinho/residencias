import React from 'react'

import  Caller from './Caller'


export default  class CtiList extends  React.Component {

    constructor(props) {
    super(props);
    this.state = {callers: [{ type:"2455662065651",nombre:"Juan"},{type:"854654165005",nombre:"luis"},{ type:"2714588004",nombre:"Laura"},]};
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
                    <div id="CtiList" className="row">
                        <ul id="caller-list" className="row"><li><span className="glyphicon glyphicon-warning-sign"></span>
                        </li></ul>



                    </div>
                )
            }

    }
    _getCaller()
    {
        this.setState({callers: Historial._getCaller()});
    }

}