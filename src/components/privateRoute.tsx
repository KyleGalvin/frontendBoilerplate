import * as React from "react";
import { Route, Redirect, RouteProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as path from "path";

import Logger from "../utils/logger";
import { IAppState } from "../stores/store";

const logger = Logger(path.basename(__filename));

interface IOwnProps {
  component: React.ComponentClass<Pick<IStateProps, never>>;
  path: string;
}

interface IStateProps {
  component: React.ComponentClass<Pick<IStateProps, never>>;
  loggedIn: boolean;
  path: string;
  children?: any;
  exact?: boolean;
}

const mapStateToProps = (state: IAppState, ownProps: IOwnProps): IStateProps => {
  return {
    ...ownProps,
    ... {
      "loggedIn": state.auth !== ""
    }
  };
};

const PrivateRouteComponent = (props: IStateProps) => {
  logger.info("PRIVATE RENDER");
  return (
    props.loggedIn ? (
      <Route {...props.exact} component={props.component} />
    ) : (
      <Redirect to={{
        "pathname": "/",
        "state": { "from": props.path }
      }} />
    )
  )
}


export default withRouter(connect(mapStateToProps)(PrivateRouteComponent) as any);
