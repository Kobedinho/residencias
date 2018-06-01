import React from 'react'
import ReactDOM from 'react-dom'




export default class CTICallList extends React.Component {

    constructor(props) {
        super(props);

    }

    render (){
        return <div className="row">
            <div className="row">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
      </span>
                </div>


                <br />

            </div>




        </div>

    }
}