import React from 'react'
import ReactDOM from 'react-dom'

export default class CtiKeyboard extends React.Component{
    constructor(props){
        super(props);

    }
    render(){


        return(








            <div className="row" style={{textAlign:'center',lineHeight:"3em",}}>
                <br/>

                <input  type="text" className="form-control"   placeholder="numero"aria-describedby="sizing-addon1"/>


                <br/>
                <div className="row"  >
                    <div className="col-md-4" style={{backgroundColor:'#5c6465',}}>1</div>
                    <div className="col-md-4"  style={{backgroundColor:'#5c6465',}}>2</div>
                    <div className="col-md-4" style={{backgroundColor:'#5c6465',}}>3 </div>
                </div>


                <div className="row">
                    <div className="col-md-4 " style={{backgroundColor:'#5c6465',}}>4 </div>
                    <div className="col-md-4" style={{backgroundColor:'#5c6465',}}>5 </div>
                    <div className="col-md-4" style={{backgroundColor:'#5c6465',}}>6 </div>
                </div>


                <div className="row">
                    <div className="col-md-4" style={{backgroundColor:'#5c6465',}}>7 </div>
                    <div className="col-md-4" style={{backgroundColor:'#5c6465',}}>8 </div>
                    <div className="col-md-4" style={{backgroundColor:'#5c6465',}}>9</div>
                </div>

                <div className="row">

                    <div className="col-md-4"style={{backgroundColor:'rgb(65, 76, 78)',}}>
                        <div><img src="dist/imagen/tefeono2.png" style={{width: '20px'}} /></div> </div>
                    <div className="col-md-4  " style={{backgroundColor:'#5c6465',}}>0</div>
                    <div className="col-md-4" style={{backgroundColor:'rgb(65, 76, 78)',}}>  <div><img src="dist/imagen/boton-atras.png" style={{width: '20px'}} /></div></div>
                </div>

                </div>


                )






    }
}