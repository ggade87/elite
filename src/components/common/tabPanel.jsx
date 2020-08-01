import React, { Component } from "react";
import { updateObject } from "../../shared/utility";
class TabPanel extends Component {
  handleTabChange = (page) => {
    let cloneData = this.props.data.map((e) => ({
      ...e,
      active: false,
    })); // ES6
    const seelctedTab = cloneData.filter((p) => p.type === page);
    seelctedTab[0].active = true;
    updateObject(cloneData, seelctedTab);
    this.props.updated(cloneData);
  };

  handleSelectedAmount = (amount) => {
    this.props.selectedAmount(amount);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.data.length > 0 ? (
          <div class="card">
            <div class="card-header">PLANS</div>
            <div class="card-body">
              <div>
                <nav className="nav nav-pills flex-column flex-sm-row">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {this.props.data.map((item) => {
                      return (
                        <button
                          key={item.type}
                          className={
                            item.active
                              ? " nav-item  text-sm-center nav-link active"
                              : "  nav-item  text-sm-center nav-link"
                          }
                          onClick={() => this.handleTabChange(item.type)}
                        >
                          {item.tabName}
                        </button>
                      );
                    })}
                  </div>
                </nav>
                <div className="tab-content" id="myTabContent">
                  {this.props.data.map((item) => {
                    return (
                      <div
                        key={item.type}
                        className={
                          item.active
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="home"
                      >
                        <table className="table">
                          <tbody>
                            {item.listD.map((i, index) => {
                              return (
                                <div key={item.type + Math.random()}>
                                  <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                      <button
                                        class="btn btn-link"
                                        onClick={() =>
                                          this.handleSelectedAmount(i.amount)
                                        }
                                      >
                                        {i.amount}
                                      </button>
                                    </td>
                                    <td>
                                      <p>{i.description}</p>
                                    </td>
                                  </tr>
                                </div>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default TabPanel;
