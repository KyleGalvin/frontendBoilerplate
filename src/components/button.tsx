import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState } from "../stores/store";
import Logger from "../utils/logger";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

const logger = Logger(path.basename(__filename));

interface IButton {
  text: string;
  onClick: () => void;
}

const Component: React.SFC<IButton> = (props: IButton) => {
  return (
    <div onClick={props.onClick}>
        {props.text}
    </div>
  );
};

export default Component;