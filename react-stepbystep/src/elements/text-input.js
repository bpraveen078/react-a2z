import React from "react";
import TextField from "@material-ui/core/TextField";

const style = {
  txtInput: {
    width: "400px"
  }
};

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isValid: true,
      minLength: 0,
      maxLength: 0,
      errormessage: ""
    };
    console.log(props.name);
  }
  handleChange = e => {
    debugger;
    this.validate(e);
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };
  validate = e => {
    debugger;
    this.setState({
      isValid: true
    });
    if (this.props.type === "mobile") {
      debugger;
    }
    if (this.props.required && e.target.value == "") {
      this.setState({
        isValid: false,
        errormessage: `${e.target.placeholder} is required`
      });
    } else if (
      this.props.minLength &&
      e.target.value.length < parseInt(this.props.minLength, 10)
    ) {
      this.setState({
        isValid: false,
        errormessage: `${e.target.placeholder} lenth should be grater than ${
          this.props.minLength
        }`
      });
    } else if (
      this.props.maxLength &&
      e.target.value.length > parseInt(this.props.maxLength, 10)
    ) {
      this.setState({
        isValid: false,
        errormessage: `${e.target.placeholder} lenth should be less than ${
          this.props.maxLength
        }`
      });
    }
  };
  componentWillReceiveProps(props) {
    debugger;
    // alert("child--componentWillReceiveProps");
  }
  // shouldComponentUpdate(prevProps, newProps) {
  //   return false;
  // }
  render() {
    const { value, type } = this.props;
    debugger;
    return (
      <div>
        <TextField
          className="txt-input"
          style={style.txtInput}
          error={!this.state.isValid}
          name={this.props.name}
          value={value}
          label={this.props.label}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        {this.state.isValid == false && (
          <div>
            <span className="error-message">{this.state.errormessage} </span>
          </div>
        )}
      </div>
    );
  }
}

export default TextInput;
