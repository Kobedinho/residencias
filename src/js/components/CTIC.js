import React from 'react'
import ReactDOM from 'react-dom'



export default class CTIC extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(

            <div className="row">
                <div id='timeline-embed' style={{width: '100%', height:'250px', overflow:'auto',  }}></div>


            </div>
        )
    }
}