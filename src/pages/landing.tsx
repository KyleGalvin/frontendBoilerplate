import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState, Store } from "../stores/store";
import NavBar from "../components/navbar";

import Landing from "../components/landing";

import Logger from "../utils/logger";
import * as AuthService from "../services/auth";

const logger = Logger(path.basename(__filename));

const Component: React.SFC<{}> = () => {
  return (
    <Grid fluid>
      <NavBar/>
      <Landing/>
    </Grid>
  );
};

export default Component;
