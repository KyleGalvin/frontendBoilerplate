import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { connect } from "react-redux";

import { IAppState } from "../stores/store";

interface IProps {
  loggedIn: boolean;
  path: string;
  routeProps?: RouteProps;
  children?: any;
  exact: boolean;
}

const mapStateToProps = (state: IAppState, ownProps: IProps): IProps => {
  return {
    ...ownProps,
    ... {"loggedIn": state.auth !== ""}
  };
};

const PrivateRouteComponent = (props: IProps) => (
  <Route {...props.exact} {...props.routeProps} render={() => (
    props.loggedIn ? (
      <div>{props.children}</div>
    ) : (
      <Redirect to={{
        "pathname": "/",
        "state": { "from": props.path }
      }} />
    ))}
  />
);

export default connect(mapStateToProps)(PrivateRouteComponent);
