import * as React from "react";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";
import Swagger from "./swagger";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <Col xs={10}>
      <div className={"placeholderText"}>
        <Swagger/>
      </div>
    </Col>
  );
};

export default Component;
