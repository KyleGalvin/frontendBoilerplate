import * as React from "react";
import * as path from "path";

import LeftPanel from "./leftPanel";
import MainPanel from "./mainPanel";
import UserCard from "./userCard";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <div className={"mainPanel"}>
      <div className={"placeholderText"}>
        <div className={"width100"}>User Discovery</div>
        {Array.apply(null, Array(20)).map(() => <UserCard/>)}
      </div>
    </div>
  );
};

export default Component;
