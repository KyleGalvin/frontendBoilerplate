import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState } from "../stores/store";
import Logger from "../utils/logger";
import PersonalSummary from "../components/personalSummary";
import Contacts from "../components/contacts";
import MainPanel from "../components/mainPanel";
import { Link } from "react-router-dom";

const logger = Logger(path.basename(__filename));

const mapStateToProps = (state: IAppState): IUser => {
  logger.info({obj: state}, "personal summary mapStateToProps");
  return state.user;
};

const Component: React.SFC<IUser> = (props: IUser) => {
  return (
    <Grid fluid>
      <Row center="xs" start="md">
        <Col xs={12} md={4} className="personalSummaryContainer">
          <PersonalSummary />
          <Contacts />
          <Link to="Login">Login</Link>
          <Link to="Signup">Signup</Link>
        </Col>
        <Col xs={12} md={8} className="mainContentContainer">
          <MainPanel />
          <div className="box">Responsive</div>
        </Col>
      </Row>
    </Grid>
  );
};

export default connect(mapStateToProps)(Component);
