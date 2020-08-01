import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import RechargeAmount from "./RechargeAmount";
import RechargePlan from "./RechargePlan";
import Joi from "joi-browser";
import classes from "./MobileRecharge.module.css";
import Form from "../../../components/common/form";
class MobileRecharge extends Form {
  state = {
    amount: 0,
    next: false,
    showPlan: false,
    data: { mobileNumber: "", operator: "", circle: "" },
    errors: {},
    operator: [
      { _id: "5b21ca3eeb7f6fbccd471818", name: "operator1" },
      { _id: "5b21ca3eeb7f6fbccd471814", name: "operator2" },
      { _id: "5b21ca3eeb7f6fbccd471820", name: "operator3" },
    ],
    circle: [
      { _id: "5b21ca3eeb7f6fbccd471818", name: "circle1" },
      { _id: "5b21ca3eeb7f6fbccd471814", name: "circle2" },
      { _id: "5b21ca3eeb7f6fbccd471820", name: "circle3" },
    ],
  };
  schema = {
    mobileNumber: Joi.number().required().label("Mobile Number"),
    operator: Joi.string().required().label("Operator"),
    circle: Joi.string().required().label("Circle"),
  };
  handleNext = () => {
    this.setState({ next: true });
  };
  showPlanHandler = () => {
    this.setState({ showPlan: !this.state.showPlan });
  };

  doSubmit = () => {
    console.log("Subited", this.state.data.mobileNumber);
  };
  handleSelectedAmount = (amount) => {
    this.setState({ amount, showPlan: !this.state.showPlan });
  };
  render() {
    return (
      <div className={classes.MobileRecharge}>
        {!this.state.next ? (
          <div>
            <h1> </h1>
            <form onSubmit={this.handleNext}>
              {this.renderInput("mobileNumber", "Mobile")}
              {this.renderSelect("operator", "Operator", this.state.operator)}
              {this.renderSelect("circle", "Circle", this.state.circle)}
              {this.renderButton("Next")}
            </form>
          </div>
        ) : !this.state.showPlan ? (
          <RechargeAmount
            onViewPlan={this.showPlanHandler}
            mobileNumber={this.state.data.mobileNumber}
            amount={this.state.amount}
            {...this.props}
          ></RechargeAmount>
        ) : (
          <RechargePlan
            changedAmount={this.handleSelectedAmount}
            onPlanSelect={this.showPlanHandler}
          ></RechargePlan>
        )}
      </div>
    );
  }
}

export default MobileRecharge;
