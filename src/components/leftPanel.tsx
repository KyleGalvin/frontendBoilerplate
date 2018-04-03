import * as React from "react";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <Col xs={2}>
        <div className={"placeholderText"}>
          <div className="accordionContainer">
            <button className="accordion">API Documentation</button>
            <button className="accordion">Settings</button>
            <div className="panel">
              <p>Lorem ipsum...</p>
            </div>
            <button className="accordion">Pages</button>
            <div className="panel">
              <p>Lorem ipsum...</p>
            </div>
          </div>
        </div>
    </Col>
  );
};

export default Component;
