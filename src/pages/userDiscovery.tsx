import * as React from "react";
import * as path from "path";

import LeftPanel from "../components/leftPanel";
import UserDiscovery from "../components/userDiscovery";

const Component = () => {
  return (
    <div className={"contentContainer"}>
      <LeftPanel />
      <UserDiscovery />
    </div>
  );
};

export default Component;
