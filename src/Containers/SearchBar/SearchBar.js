import React, { Component } from "react";
import Input from "material-ui/Input";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <Input
          placeholder="Search"
          inputProps={{
            "aria-label": "Description"
          }}
          fullWidth
        />
      </div>
    );
  }
}
