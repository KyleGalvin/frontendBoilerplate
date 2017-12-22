import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState } from "../stores/store";
import NavBar from "../components/navbar";
import Modal from "../components/modal";

const mapStateToProps = (state: IAppState): IUser => {
  return state.user;
};

const Component: React.SFC<IUser> = (props: IUser) => {
  return (
    
    <Grid fluid>
        <Modal/>
        <NavBar />
    </Grid>
  );
};

export default connect(mapStateToProps)(Component);
