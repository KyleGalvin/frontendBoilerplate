import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import Logger from "../utils/logger";
import Dashboard from "../components/dashboard";
import NavBar from "../components/navbar";

const logger = Logger(path.basename(__filename));

class Component extends React.Component<{}, {}> {

  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Grid fluid>
        <NavBar/>
        <Dashboard/>
      </Grid>
    );
  }
}

export default Component;
