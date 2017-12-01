import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import { IAppState } from "../stores/store";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

const mapStateToProps = (state: IAppState): IUser => {
  logger.info({obj: state}, "personal summary mapStateToProps");
  return state.user;
};

const Component: React.SFC<IUser> = (props: IUser) => {
  return (
    <div>
      <div>{props.firstName} {props.lastName}</div>
      <img src={props.avatar} />
      <div>Content</div>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
