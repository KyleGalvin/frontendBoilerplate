import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState } from "../stores/store";
import * as Config from "../config/confManager";
import Logger from "../utils/logger";
import Signup from "../components/signup";

const logger = Logger(path.basename(__filename));

const mapStateToProps = (state: IAppState): IUser => {
  logger.info({obj: state}, "personal summary mapStateToProps");
  return state.user;
};

const Component: React.SFC<IUser> = (props: IUser) => {
  return (
    <Grid fluid>
      <Row center="xs" start="md">
        <Col xs={12} md={4} className="login">
          <Signup />
        </Col>
      </Row>
    </Grid>
  );
};

export default connect(mapStateToProps)(Component);