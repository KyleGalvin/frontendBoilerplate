import * as React from "react";
import * as path from "path";
import Swagger from "./swagger";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <div className={"mainPanel"}>
      <div className={"placeholderText"}>
        <Swagger/>
      </div>
    </div>
  );
};

export default Component;
