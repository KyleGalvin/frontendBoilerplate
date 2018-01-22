import * as React from "react";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <Col xs={10}>
      <div className={"placeholderText"}>mainPanel</div>
    </Col>
  );
};

export default Component;
