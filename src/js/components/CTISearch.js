import React from 'react'
import ReactDOM from 'react-dom'




export default  class CTISearch extends React.Component{

    constructor(props){
        super(props);
    }


    render(){


        return(
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
            </div>
                    )
    }

}