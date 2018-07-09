import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";

import { ISignupFormField } from "../reducers/reducer";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

const Component: React.SFC<ISignupFormField> = (props: ISignupFormField) => {
    return (
        <div>
            <div>
                <label>{props.label}</label>
            </div>
            <div>
                <div className={props.status === true ? "fa-check-circle-o icon" : "fa-times-circle-o icon"}></div>
            </div>
            <div>
                <input type="text" name={props.name} onChange={props.onChange} />
            </div>
        </div>
    );
};

export default Component;
