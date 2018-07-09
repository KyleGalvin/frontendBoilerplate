import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import { IAppState } from "../stores/store";
import Logger from "../utils/logger";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";
import Button from "../components/button";
import LeftPanel from "../components/leftPanel";
import NotFound from "../components/notFound";

const logger = Logger(path.basename(__filename));

const Component: React.SFC<{}> = () => {
  return (
    <div className={"contentContainer"}>
      <LeftPanel />
      <NotFound />
    </div>
  );
};

export default Component;
