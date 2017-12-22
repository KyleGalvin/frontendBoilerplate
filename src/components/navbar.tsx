import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import Button from "../components/button";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

const loginClick = () => {
  logger.info("login click");
};
const signupClick = () => {
  logger.info("signup click");
};

const Component: React.SFC<{}> = (props: {}) => {
    return (
        <Row end="xs">
          <Col xs={8} sm={4} md={2} lg={1}>
            <Row center="xs">
              <Col xs={6}>
                <Button text="Login" onClick={loginClick}/>
              </Col>
              <Col xs={6}>
                <Button text="Signup" onClick={signupClick}/>
              </Col>
            </Row>
          </Col>
        </Row>
    );
};

export default Component;
