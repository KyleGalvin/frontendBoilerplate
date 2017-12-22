import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState } from "../stores/store";
import NavBar from "../components/navbar";

interface IModal {
  enabled: boolean;
  type: string;
}

class Component extends React.Component<{}, IModal> {
  public render() {
    return (
      <Grid fluid>
        <NavBar />
      </Grid>
    );
  }
}

export default Component;
