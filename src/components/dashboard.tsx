import * as React from "react";
import * as path from "path";

import LeftPanel from "./leftPanel";
import MainPanel from "./mainPanel";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <div>
      <LeftPanel />
      <MainPanel />
    </div>
  );
};

export default Component;
