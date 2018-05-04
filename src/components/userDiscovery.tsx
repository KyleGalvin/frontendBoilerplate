import * as React from "react";
import * as path from "path";

import LeftPanel from "./leftPanel";
import MainPanel from "./mainPanel";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <div className={"mainPanel"}>
      <div className={"placeholderText"}>
        User Discovery
      </div>
    </div>
  );
};

export default Component;
