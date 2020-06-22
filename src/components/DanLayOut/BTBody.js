import React, { Component } from "react";
import DanLayOut from "./DanLayOut";
import BTBanner from "./BTBanner";
import BTItem from "./BTItem";

export default class BTBody extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <BTBanner />
          <BTItem />
        </div>
      </div>
    );
  }
}
