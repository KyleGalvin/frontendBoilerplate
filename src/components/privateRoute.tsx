import * as React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteComponent = (props: any) => (
  <Route {...props.routeProps} render={() => (
  props.logged_in ? (
      <div>{props.children}</div>
      ) : (
      <Redirect to={{
          "pathname": "/",
          "state": { "from": props.location }
      }} /> )
  )} />
);

export default PrivateRouteComponent;
