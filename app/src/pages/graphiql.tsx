import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import Logger from "../utils/logger";
import LeftPanel from "../components/leftPanel";
import * as API from "../services/swagger";

const GraphiQL = require("graphiql");
const logger = Logger(path.basename(__filename));

const Component = () => {
  logger.info("Graphiql render " + typeof(GraphiQL));
  return (
    <div>
      <LeftPanel />
      <div className={"mainPanel"}>
        <div className={"placeholderText"}>
          <GraphiQL fetcher={API.getGraphQL}/>
        </div>
      </div>
    </div>
  );
};

export default Component;
