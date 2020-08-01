import React, { Component } from "react";
import CardPayment from "./CardPayment";
import NetBanking from "./NetBanking";

class Payment extends Component {
  state = {
    paymentRes: false,
    page1: true,
    page2: false,
  };
  showResponseHandler = () => {
    this.setState({ paymentRes: !this.state.paymentRes });
  };
  handleTabChange = (page) => {
    console.log(page);
    if (page === "page1") {
      this.setState({ page1: true, page2: false });
    } else if (page === "page2") {
      this.setState({ page1: false, page2: true });
    }
  };
  render() {
    console.log(this.props);
    const { page1, page2 } = this.state;
    return (
      <div>
        <div className="card">
          <div className="card-header">PAYMENT</div>
          <div className="card-body">
            <h5 className="card-title"> Select payment method </h5>{" "}
            {this.state.paymentRes ? (
              <div>
                Reachrge is succudful
                <button onClick={() => this.props.history.push("/")}>
                  DONE
                </button>
              </div>
            ) : (
              <div>
                <nav className="nav nav-pills flex-column flex-sm-row">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={
                        page1
                          ? " nav-item  text-sm-center nav-link active"
                          : "  nav-item  text-sm-center nav-link"
                      }
                      onClick={() => this.handleTabChange("page1")}
                    >
                      Debit/Credit
                    </button>
                    <button
                      className={
                        page2
                          ? " nav-item  text-sm-center nav-link active"
                          : "nav-item  text-sm-center nav-link"
                      }
                      onClick={() => this.handleTabChange("page2")}
                    >
                      Netbanking
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="myTabContent">
                  <div
                    className={
                      page1 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id="home"
                  >
                    <CardPayment
                      rechargeAmount={this.props.rechargeAmount}
                      onPayment={this.showResponseHandler}
                    ></CardPayment>
                  </div>
                  <div
                    className={
                      page2 ? "tab-pane fade show active" : "tab-pane fade"
                    }
                    id="profile"
                  >
                    <NetBanking></NetBanking>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
