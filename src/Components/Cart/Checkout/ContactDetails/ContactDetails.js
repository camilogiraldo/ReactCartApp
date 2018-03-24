import React, { Component } from "react";
import Card from "material-ui/Card";
import classes from "./ContactDetails.css";
import TextField from "material-ui/TextField";
import { Divider } from "material-ui";

export default class ContactDetails extends Component {
  state = {
    firstName: null,
    secondName: null,
    phoneNumber: null,
    address: null,
    city: null,
    state: null,
    zipcode: null
  };

  handleInputChange = event => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className={classes.Card}>
        <Card>
          <div className={classes.Container}>
            <h2>Contact Information</h2>
            <TextField
              id="firstName"
              label="First Name"
              name="firstName"
              onChange={this.handleInputChange}
              margin="normal"
              className={classes.Input}
              required
            />
            <TextField
              id="secondName"
              label="Second Name"
              name="secondName"
              onChange={this.handleInputChange}
              margin="normal"
              className={classes.Input}
              required
            />
            <TextField
              id="phoneNumber"
              label="Phone number"
              name="phoneNumber"
              onChange={this.handleInputChange}
              margin="normal"
              className={classes.Input}
              required
            />
            <Divider />
            <h2>Address Information</h2>
            <TextField
              id="address"
              label="Full Address"
              name="address"
              onChange={this.handleInputChange}
              margin="normal"
              className={classes.Input}
              required
            />
            <TextField
              id="city"
              label="City"
              name="city"
              onChange={this.handleInputChange}
              margin="normal"
              className={classes.Input}
              required
            />
            <TextField
              id="state"
              label="State"
              name="state"
              onChange={this.handleInputChange}
              margin="normal"
              className={classes.Input}
              required
            />
            <TextField
              id="zipcode"
              label="Zipcode"
              name="zipcode"
              onChange={this.handleInputChange}
              margin="normal"
              className={classes.Input}
              required
            />
          </div>
        </Card>
      </div>
    );
  }
}
