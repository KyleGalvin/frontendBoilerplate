import * as React from "react";
import * as path from "path";

const Component: React.SFC<{}> = (props: {}) => {
  return (
    <div className={"contactCard"}>
      <div className={"title width100"}>
        Username
      </div>
      <div>
        <div className={"subtitle width75 floatLeft"}>Firstname Lastname</div>
      </div>
      <img src=""/>
    </div>
  );
};
export default Component;
