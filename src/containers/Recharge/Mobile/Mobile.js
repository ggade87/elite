import React from "react";
import classes from "./Mobile.module.css";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { updateObject, checkValidity } from "../../../shared/utility";
import PropTypes from "prop-types";
class Mobile extends React.Component {
  state = {
    controls: {
      mobilenumber: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Mobile number",
          required: true,
        },
        value: "",
        validation: {
          required: true,
          fixlength: 10,
          type: PropTypes.number,
        },
        valid: false,
        touched: false,
        message: "Please enter valid mobile number",
      },
      operator: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "", displayValue: "Operator" },
            { value: "Airtel", displayValue: "Airtel" },
            { value: "BSNL", displayValue: "BSNL" },
            { value: "Idea", displayValue: "Idea" },
            { value: "MTNL Delhi", displayValue: "MTNL Delhi" },
            { value: "Vodafone", displayValue: "Vodafone" },
            { value: "MTNL Mumbai", displayValue: "MTNL Mumbai" },
            { value: "JIO", displayValue: "JIO" },
          ],
        },
        value: "",
        validation: { oprator: true },
        valid: false,
        message: "Please select operator",
      },
      circle: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "", displayValue: "Circle" },
            { value: "CAirtel", displayValue: "CAirtel" },
            { value: "CBSNL", displayValue: "CBSNL" },
            { value: "CIdea", displayValue: "CIdea" },
            { value: "CMTNL Delhi", displayValue: "CMTNL Delhi" },
            { value: "CVodafone", displayValue: "CVodafone" },
            { value: "CMTNL Mumbai", displayValue: "CMTNL Mumbai" },
            { value: "cJIO", displayValue: "CJIO" },
          ],
        },
        value: "",
        validation: { oprator: true },
        valid: false,
        message: "Please select Circle",
      },
    },

    isPageValid: false,
  };

  inputChangedHandler = (event, controlName) => {
    this.validation(event, controlName);
  };
  validation = (event, controlName) => {
    const updateControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      }),
    });

    this.setState({
      controls: updateControls,
      isPageValid:
        updateControls["mobilenumber"].valid &&
        updateControls["operator"].valid &&
        updateControls["circle"].valid,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.controls["mobilenumber"] !== prevState.controls["mobilenumber"]
    ) {
      this.state.controls["mobilenumber"].valid
        ? this.validationCheck("Airtel", "operator")
        : this.validationCheck("", "operator");
    }
    if (this.state.controls["operator"] !== prevState.controls["operator"]) {
      this.state.controls["operator"].valid
        ? this.validationCheck("CVodafone", "circle")
        : this.validationCheck("", "circle");
    }
  }
  validationCheck = (name, controlName) => {
    console.log(name + "   " + controlName);
    const updateControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: name,
        valid: checkValidity(name, this.state.controls[controlName].validation),
        touched: true,
      }),
    });
    this.setState({
      controls: updateControls,
      isPageValid:
        updateControls["mobilenumber"].valid &&
        updateControls["operator"].valid &&
        updateControls["circle"].valid,
    });
  };
  nextHandler = (event) => {
    event.preventDefault();
    console.log("asas");
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        message={formElement.config.message}
      ></Input>
    ));
    return (
      <div className={classes.Mobile}>
        <form onSubmit={this.nextHandler}>
          {form}
          <Button btnType="Success" disabled={!this.state.isPageValid}>
            next
          </Button>
        </form>
      </div>
    );
  }
}

export default Mobile;
