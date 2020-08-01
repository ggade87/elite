import React from "react";
import Payment from "../Payment/Payment";
import Form from "../../../components/common/form";
import Joi from "joi-browser";
class RechargeAmount extends Form {
  state = {
    showPayment: false,
    data: { amount: "" },
    errors: {},
  };
  schema = {
    amount: Joi.number().required().label("amount"),
  };

  componentDidMount() {
    if (this.props.amount > 0) {
      const data = {
        amount: this.props.amount,
      };
      this.setState({ data });
    }
  }
  handleNext = () => {
    this.setState({ showPayment: !this.state.showPayment });
    if (this.props.amount > 0) {
      const data = {
        amount: this.props.amount,
      };
      this.setState({ data });
    }
    console.log("Subited", this.state.data.mobileNumber);
  };
  render() {
    return (
      <div>
        {this.state.showPayment ? (
          <Payment
            rechargeAmount={this.state.data.amount}
            {...this.props}
          ></Payment>
        ) : (
          <div>
            <div class="card">
              <div class="card-header">Enter the amount</div>
              <div class="card-body">
                <h5 class="card-title"> {this.props.mobileNumber}</h5>
                <p class="card-text" style={{ float: "right" }}>
                  <button
                    onClick={this.props.onViewPlan}
                    className="btn btn-secondary"
                  >
                    View plan
                  </button>
                </p>
                <br></br>
                <form onSubmit={this.handleNext}>
                  {this.renderInput("amount", "Amount")}
                  {this.renderButton("RECHARGE")}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RechargeAmount;
