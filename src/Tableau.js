import React, { Component } from "react";

import { Loader } from "../src/Loader";

let TableauReport: any;

type TableauProps = {
  dashboardUrls: {
    mobile: string,
    desktop: string
  }
};

export default class Tableau extends Component<TableauProps> {
  state = {
    screenWidth: 0
  };

  componentDidMount() {
    if (typeof window !== undefined) {
      TableauReport = require("tableau-react");
      this.setState({ screenWidth: window.innerWidth });
    }
  }

  render() {
    const {
      dashboardUrls: { mobile, desktop }
    } = this.props;
    const { screenWidth } = this.state;

    const dashboard = screenWidth >= 1040 ? desktop : mobile;
    return screenWidth ? (
      <TableauReport url={dashboard} />
    ) : (
      <Loader fillColour={"#3666b8"} loaderWidth={"60px"} />
    );
  }
}
