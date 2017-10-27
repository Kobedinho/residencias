import React from 'react'
/*import InputError from './InputError';*/

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      value: '',
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }
 
  handleChange(event){
    debugger;
    //validate the field locally
    this.validation(event.target.value);
 
    //Call onChange method on the parent component for updating it's state
    //If saving this field for final form submission, it gets passed
    // up to the top component for sending to the server
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  }
 
  validation(value, valid) {
    debugger;
    //The valid variable is optional, and true if not passed in:
    if (typeof valid === 'undefined') {
      valid = true;
    }
    
    var message = "";
    var errorVisible = false;
    
    //we know how to validate text fields based on information passed through props
    if (!valid) {
      //This happens when the user leaves the field, but it is not valid
      //(we do final validation in the parent component, then pass the result
      //here for display)
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if (this.props.required && value === '') {
      //this happens when we have a required field with no text entered
      //in this case, we want the "emptyMessage" error message
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    }
    //else if (value.length < this.props.minCharacters) {
      //This happens when the text entered is not the required length,
      //in which case we show the regular error message
      //message = this.props.errorMessage;
      //valid = false;
      //errorVisible = true;
    //}
    
    //setting the state will update the display,
    //causing the error message to display if there is one.
    this.setState({
      value: value,
      isEmpty: value==='' ? true : false,//jQuery.isEmptyObject(value),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible
    });
    
  }
 
  handleBlur(event) {
    debugger;
    //Complete final validation from parent element when complete
    var valid = this.props.validate ? this.props.validate(event.target.value) : true;
    //pass the result to the local validation element for displaying the error
    this.validation(event.target.value, valid);
  }
  render() {
    
    return (
      <div className={this.props.id}>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          className={'form-control input input-' + this.props.id}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.state.value}
          id={this.props.id} />

      </div>
    );
  }
}