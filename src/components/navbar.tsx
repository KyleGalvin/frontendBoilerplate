import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import Button from "../components/button";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

export interface IProps {
  "loginModal": boolean;
  "signupModal": boolean;
  "loginClick": () => void;
  "signupClick": () => void;
}

const Component: React.SFC<IProps> = (props: IProps) => {
  return (
    <Row end="xs">
      <Col xs={8} sm={4} md={2} lg={1}>
        <Row center="xs">
          <Col xs={6}>
            <Button text="Login" onClick={props.loginClick}/>
          </Col>
          <Col xs={6}>
            <Button text="Signup" onClick={props.signupClick}/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Component;
