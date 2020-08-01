import React, { Component } from "react";
import TabPanel from "../../../components/common/tabPanel";
class RechargePlan extends Component {
  state = {
    list: [
      {
        type: "page1",
        tabName: "tab1",
        active: true,
        listD: [
          { amount: 12, description: "asasas" },
          { amount: 12, description: "asasas" },
        ],
      },
      {
        type: "page2",
        tabName: "tab2",
        active: false,
        listD: [
          { amount: 13, description: "asasas" },
          { amount: 13, description: "asasas" },
        ],
      },
      {
        type: "page3",
        tabName: "tab3",
        active: false,
        listD: [
          { amount: 14, description: "asasas" },
          { amount: 14, description: "asasas" },
        ],
      },
      {
        type: "page4",
        tabName: "tab4",
        active: false,
        listD: [
          { amount: 8, description: "asasas" },
          { amount: 8, description: "asasas" },
        ],
      },
    ],
  };
  // handleTabChange = (page) => {
  //   console.log(page);
  //   if (page === "page1") {
  //     this.setState({ page1: true, page2: false, page3: false });
  //   } else if (page === "page2") {
  //     this.setState({ page1: false, page2: true, page3: false });
  //   } else if (page === "page3") {
  //     this.setState({ page1: false, page2: false, page3: true });
  //   }
  // };

  setList = (list) => {
    this.setState({ list });
  };
  selectedAmountHandler = (amount) => {
    this.props.changedAmount(amount);
  };
  render() {
    return (
      <div>
        <TabPanel
          data={this.state.list}
          updated={this.setList}
          selectedAmount={this.selectedAmountHandler}
        ></TabPanel>
        {/* <nav className="nav nav-pills flex-column flex-sm-row">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className={
                page1
                  ? " nav-item  text-sm-center nav-link active"
                  : "  nav-item  text-sm-center nav-link"
              }
              onClick={() => this.handleTabChange("page1")}
            >
              Active
            </button>
            <button
              className={
                page2
                  ? " nav-item  text-sm-center nav-link active"
                  : "nav-item  text-sm-center nav-link"
              }
              onClick={() => this.handleTabChange("page2")}
            >
              Longer nav link
            </button>
            <button
              className={
                page3
                  ? "nav-item  text-sm-center nav-link active"
                  : "nav-item   text-sm-center nav-link"
              }
              onClick={() => this.handleTabChange("page3")}
            >
              Link
            </button>
          </div>
        </nav>
        <div className="tab-content" id="myTabContent">
          <div
            className={page1 ? "tab-pane fade show active" : "tab-pane fade"}
            id="home"
          >
            2...
          </div>
          <div
            className={page2 ? "tab-pane fade show active" : "tab-pane fade"}
            id="profile"
          >
            ...
          </div>
          <div
            className={page3 ? "tab-pane fade show active" : "tab-pane fade"}
            id="contact"
          >
            3 ...
          </div>
        </div> */}
      </div>
    );
  }
}

export default RechargePlan;
