import * as React from "react";
import { connect } from "react-redux";

import * as UIService from "../services/ui";
import { IAppState, store } from "../stores/store";
import { config } from "../config";

interface IStateProps extends IOwnProps {
  dropdownOpen: boolean;
}

interface IOwnProps {
  image: string;
}

const mapStateToProps = (state: IAppState, props: IOwnProps): IStateProps => {
  return {
    ...props,
    ...{"dropdownOpen": state.ui.preferencesDropdownToggle}
  };
};

const toggleDropdown = () => {
  store.dispatch(UIService.toggleMenu());
};

const Component = (props: IStateProps) => {
  return (
    <div className="relative">
      <div className={"avatarThumb button"} onClick={toggleDropdown}>
        <div className="fa-chevron-down left"/>
        <img src={props.image ? props.image : (config.frontendDomain + "/images/avatar.jpg")} />
      </div>
      {props.dropdownOpen
          ?
            <div className="dropdown absolute">
              <div className="dropdownElement">One</div>
              <div className="dropdownElement">Two</div>
              <div className="dropdownElement">Three</div>
            </div>
          : null
        }
    </div>

  );
};

export default connect(mapStateToProps)(Component);
