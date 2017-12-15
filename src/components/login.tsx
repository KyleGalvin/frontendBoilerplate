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

export interface IState {
  username: string;
  password: string;
}

const Component: React.SFC<IUser> = (props: IUser) => {
  return (
    <div>
      <p>username</p><input type="text"/>
      <p>password</p><input type="password"/>
      <input type="button"/>
    </div>
  );
};

export default connect(mapStateToProps)(Component);
