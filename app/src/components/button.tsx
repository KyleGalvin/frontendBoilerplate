import * as React from "react";

interface IButton {
  text: string;
  onClick: () => void;
}

const Component: React.SFC<IButton> = (props: IButton) => {
  return (
    <div className={"button"} onClick={props.onClick}>
      {props.text}
    </div>
  );
};

export default Component;
