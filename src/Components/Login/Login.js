import React, { Component } from "react";
import classes from "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "null"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      console.log(event)
    this.setState({
      username: event.target.value
    });
    
}
handleSubmit() {
    console.log(this.state.username);
    // axios.put("https://stage-bkbackend.herokuapp.com/api/login");
    console.log("bam");
  }

  render() {
    return (
      <div className={classes.loginPage}>
        <div className={classes.form}>
          <form className={classes.loginForm} onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="username"
              className={classes.input}
              value={this.setState.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className={classes.input}
            />
            <button>login</button>
            <p className={classes.message}>
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
