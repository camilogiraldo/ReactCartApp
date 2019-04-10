import React, { Component } from "react";
import classes from "./CreateProduct.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControlLabel } from "@material-ui/core/FormControlLabel";
import Radio, { RadioGroup } from "@material-ui/core/Radio";
import Input from "@material-ui/core/Input";
import { connect } from "react-redux";
import { uploadProductReq } from "../../Store/actions/index";
import { Redirect } from "react-router-dom";

class CreateProduct extends Component {
  state = {
    productName: null,
    productDescription: null,
    productType: "",
    productStatus: null,
    productPrice: null,
    productImages: null
  };

  onPublish = event => {
    console.log("yaya");
    event.preventDefault();
    console.log(this.state);
    this.props.uploadProduct(this.state);
  };

  handleInputChange = event => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  handleImageSelect = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        productImages: {
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(",")[1]
        }
      });
    };
  };
  productTypes = ["Type 1", "Type 2", "Type 3", "Type 4"];

  render() {
    let redirect = null;
    if (this.props.productCreated) {
      redirect = <Redirect to="/" />;
    }
    return (
      <div className={classes.ProductForm}>
        {redirect}
        <Card>
          <form onSubmit={this.onPublish}>
            <div className={classes.InputPos}>
              <h1>Publish your product</h1>
              <TextField
                id="productName"
                label="Product name"
                name="productName"
                onChange={this.handleInputChange}
                margin="normal"
                className={classes.Input}
                required
              />
              <TextField
                id="productDescription"
                label="Product Description"
                name="productDescription"
                multiline
                rowsMax="4"
                onChange={this.handleInputChange}
                margin="normal"
                className={classes.Input}
                required
              />
              <TextField
                id="productType"
                name="productType"
                select
                label="Product type"
                onChange={this.handleInputChange}
                className={classes.Input}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                value={this.state.productType}
                margin="normal"
                required
              >
                {this.productTypes.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={this.state.value}
                onChange={this.handleChange}
                required
              >
                <FormControlLabel
                  value="New"
                  control={
                    <Radio
                      checked={this.state.productStatus === "New"}
                      name="productStatus"
                      onChange={this.handleInputChange}
                    />
                  }
                  label="New"
                />
                <FormControlLabel
                  value="Used"
                  control={
                    <Radio
                      checked={this.state.productStatus === "Used"}
                      name="productStatus"
                      onChange={this.handleInputChange}
                    />
                  }
                  label="Used"
                />
              </RadioGroup>
              <TextField
                id="productPrice"
                label="Price"
                name="productPrice"
                onChange={this.handleInputChange}
                margin="normal"
                className={classes.Input}
                required
              />
              <Input
                type="file"
                name="productImages"
                onChange={this.handleImageSelect}
                required
              />
              <Button
                type="submit"
                variant="raised"
                color="primary"
                className={classes.ButtonFullWidth}
              >
                Publish
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    productCreated: state.products.productUploaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadProduct: productData => dispatch(uploadProductReq(productData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
