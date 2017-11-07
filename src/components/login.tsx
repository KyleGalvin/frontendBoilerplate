import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import * as Store from "../reducers/reducer";
import * as Config from "../config/confManager";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

const mapStateToProps = (state: Store.IAppState): IUser => {
  logger.info({obj: state}, "personal summary mapStateToProps");
  return state.user;
};

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
