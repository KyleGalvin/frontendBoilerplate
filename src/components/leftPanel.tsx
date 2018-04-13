import * as React from "react";
import * as path from "path";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <div className={"leftPanel"}>
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
    </div>
  );
};

export default Component;
