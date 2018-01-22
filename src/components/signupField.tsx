import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { ISignupFormField } from "../reducers/reducer";
import Logger from "../utils/logger";

const logger = Logger(path.basename(__filename));

const Component: React.SFC<ISignupFormField> = (props: ISignupFormField) => {
    return (
        <Row center="xs" start="md">
            <Col xs={12} md={4}>
            <label>{props.label}</label>
            </Col>
            <Col xs={12} md={4}>
            <div className={props.status === true ? "fa-check-circle-o icon" : "fa-times-circle-o icon"}></div>
            </Col>
            <Col xs={12} md={4}>
            <input type="text" name={props.name} onChange={props.onChange} />
            </Col>
        </Row>
    );
};

export default Component;
