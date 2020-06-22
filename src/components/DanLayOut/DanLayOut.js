import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTBody from "./BTBody";
import BTFooter from "./BTFooter";

export default class DanLayOut extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTBody />
        <BTFooter />
      </div>
    );
  }
}
