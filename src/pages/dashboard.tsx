import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

class Component extends React.Component<{}, {}> {

  public constructor (props: any) {
    super(props);
  }

  public render() {
    return (
      <Grid fluid>
      </Grid>
    );
  }
}

export default Component;
