import * as React from "react";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <Col xs={2}>
      <div className={"placeholderText"}>leftPanel</div>
    </Col>
  );
};

export default Component;
