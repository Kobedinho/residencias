        import React from 'react'
        import ReactDOM from 'react-dom'
        import  KeyboardStore from "../store/KeyboardStore"
        import  CallingActions from '../actions/CallingActions';

    export default class CtiKeyboard extends React.Component{
        constructor(props){
            super(props);

            this.state={numero:""};

            this.handleClick=this.handleClick.bind(this);

        }
        componentDidMount(){

            KeyboardStore.addChangeListener(this.handleClick);

        }
        componentWillUnmount(){
            KeyboardStore.removeChangeListener(this.handleClick);


        }


        handleClick(valida){
            console.log(valida);
            if(valida=="delete"){
                var cadena = this.state.numero;
                console.log(cadena.slice(0,-1));
                var tmp =cadena.slice(0,-1);
                this.setState({'numero':tmp});


                // eliminar el ultimo digio

            }else if(valida=="Calling"){
                console.log("calling-act");
                CallingActions.Calling(this.state);

                // detonar evento de llamada
            }
            else{
                console.log(this.state.numero);
                var tmp=this.state.numero+''+valida;
                this.setState({"numero":tmp});
                //this.state={'numero':tmp};
                console.log(this.state.numero);
            }

        }
        render(){

            return(
                <div className="row" style={{textAlign:'center',lineHeight:"3em",}}>
                    <br/>

                    <input  type="text" className="form-control" placeholder="numero" aria-describedby="sizing-addon1" value={this.state.numero}/>

                            <br/>
                            <div className="row"  >
                                        <div className="col-md-4" onClick={this.handleClick.bind(this,'1')} style={{backgroundColor:'#5c6465',}}>1</div>
                                        <div className="col-md-4" onClick={this.handleClick.bind(this,'2')} style={{backgroundColor:'#5c6465',}}>2</div>
                                        <div className="col-md-4" onClick={this.handleClick.bind(this,'3')} style={{backgroundColor:'#5c6465',}}>3 </div>
                            </div>


                        <div className="row">
                            <div className="col-md-4 " onClick={this.handleClick.bind(this,'4')}style={{backgroundColor:'#5c6465',}}>4 </div>
                            <div className="col-md-4" onClick={this.handleClick.bind(this,'5')} style={{backgroundColor:'#5c6465',}}>5 </div>
                            <div className="col-md-4" onClick={this.handleClick.bind(this,'6')}style={{backgroundColor:'#5c6465',}}>6 </div>
                        </div>


                        <div className="row">
                            <div className="col-md-4" onClick={this.handleClick.bind(this,'7')} style={{backgroundColor:'#5c6465',}}>7 </div>
                            <div className="col-md-4" onClick={this.handleClick.bind(this,'8')} style={{backgroundColor:'#5c6465',}}>8 </div>
                            <div className="col-md-4" onClick={this.handleClick.bind(this,'9')} style={{backgroundColor:'#5c6465',}}>9</div>
                        </div>

                        <div className="row">


                            <div   className="col-md-4"   onClick={this.handleClick.bind(this,'Calling')} style={{backgroundColor:'rgb(65, 76, 78)',}}>
                                <div><img src="dist/imagen/tefeono2.png" style={{width: '20px'}} /></div> </div>
                            <div className="col-md-4  " onClick={this.handleClick.bind(this,'0')} style={{backgroundColor:'#5c6465',}}>0</div>
                            <div className="col-md-4" onClick={this.handleClick.bind(this,'delete')} style={{backgroundColor:'rgb(65, 76, 78)',}}>
                            <div><img src="dist/imagen/boton-atras.png" style={{width: '20px'}} /></div></div>
                        </div>

                        </div>


                    )






        }
    }