import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState } from "../stores/store";
import Logger from "../utils/logger";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

const logger = Logger(path.basename(__filename));

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <div className="modalGreyout">
      <div className="modalContent">
        <label> the quick brown fox jumped over the lazy dog</label>
      </div>
    </div>
  );
};

export default Component;
