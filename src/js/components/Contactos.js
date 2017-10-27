import React from  'react'
import ReactDOM from 'react-dom'


export default  class Contactos extends React.Component{
    render(){
      return(
          <tr className="contactos">
            <td className="contactos-name">{this.props.contactos.name}</td>
              <td className="contactos-num">{this.props.contactos.num}</td>
          </tr>


              )
    }

}