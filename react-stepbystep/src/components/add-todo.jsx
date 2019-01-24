import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextInput from "../elements/text-input";

export class AddTodo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: {
        name: "",
        code: "",
        mobile: ""
      }
    };
  }

  componentWillMount() {
    //   alert("componentWillMount");
  }
  componentDidMount() {
    // alert("componentDidMount");
    const { user } = this.state;
    user.name = "test";
    this.setState({
      user: {
        ...user
      }
    });
  }
  shouldComponentUpdate() {
    // alert("add--shouldComponentUpdate");
    return true;
  }
  // componentWillReceiveProps(props) {
  //   alert("componentWillReceiveProps");
  // }
  // componentWillUpdate() {
  //   alert("componentWillUpdate");
  // }
  // componentDidUpdate() {
  //   alert("componentDidUpdate");
  // }
  // componentWillUnmount() {
  //   alert("componentWillUnmount");
  // }

  handleChange = e => {
    debugger;
    const { user } = this.state;
    const { name, value } = e.target;
    debugger;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };
  render() {
    debugger;
    const { user } = this.state;
    debugger;
    return (
      <div>
        <div>
          <TextInput
            onChange={this.handleChange}
            value={user.code}
            required={true}
            minLength="4"
            label="code"
            name="code"
            placeholder="code"
            maxLength="10"
            type="txt"
          />
          <br />
          <TextInput
            onChange={this.handleChange}
            value={user.name}
            required={false}
            minLength="10"
            label="name"
            name="name"
            placeholder="name"
            maxLength="30"
          />
          <br />
          <TextInput
            onChange={this.handleChange}
            value={user.mobile}
            required={true}
            minLength="10"
            label="mobile"
            name="mobile"
            placeholder="mobile"
            maxLength="13"
            type="mobile"
          />
          <br />
          {/* <TextField
            placeholder="Code"
            label="Code"
            name="code"
            value={user.code}
            onChange={this.handleChange}
          />
          <br />
          <TextField
            placeholder="Name"
            label="Name"
            name="name"
            value={user.name}
            onChange={this.handleChange}
          /> */}
          <br />
          <Button>Save</Button>
        </div>
      </div>
    );
  }
}
