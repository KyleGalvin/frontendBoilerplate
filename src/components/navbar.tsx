import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import Button from "../components/button";
import Logger from "../utils/logger";

import { IAppState, Store } from "../stores/store";
const logger = Logger(path.basename(__filename));

export interface IProps {
  "loginModal": boolean;
  "signupModal": boolean;
  "loginClick": () => void;
  "signupClick": () => void;
  "logoutClick": () => void;
  "loggedIn": boolean;
}

const mapStateToProps = (state: IAppState, ownProps: IProps): IProps => {
  logger.info({"obj": state}, "navbar mapStateToProps");
  return {
      ...ownProps,
    ... {"loggedIn": state.auth !== ""}
  };
};

const Component: React.SFC<IProps> = (props: IProps) => {
  return (
    <Row end="xs">
      <Col xs={8} sm={4} md={2} lg={1}>
        {Store.getState().auth === "" ? (
          <Row center="xs">
            <Col xs={6}>
              <Button text="Login" onClick={props.loginClick}/>
            </Col>
            <Col xs={6}>
              <Button text="Signup" onClick={props.signupClick}/>
            </Col>
          </Row>
        ) : (
          <Row center="xs">
            <Col xs={6}>
              <Button text="Logout" onClick={props.logoutClick}/>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default connect(mapStateToProps)(Component);
