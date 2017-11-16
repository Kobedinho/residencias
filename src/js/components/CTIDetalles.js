import React from 'react'
import ReactDOM from 'react-dom'



export default class CTIDetalles extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>

                 <div className="row">
                    <br/>

                     <input  type="text" className="form-control"   placeholder="Titulo"aria-describedby="sizing-addon1"/>


                     <br/>



                    <textarea className="comentarios" placeholder="Detalles"rows="10" cols="40"></textarea>

                    </div>
                <div className="row">

                    <button type="button" className="btn-primary"  >Terminar</button>

                </div>
             </div>
             )
    }
}