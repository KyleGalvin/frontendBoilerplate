import * as React from "react";
import * as path from "path";
import Swagger from "./swagger";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <div>
      <div className={"placeholderText"}>
        <Swagger/>
      </div>
    </div>
  );
};

export default Component;
