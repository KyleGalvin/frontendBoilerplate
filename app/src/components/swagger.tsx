import * as React from "react";
import { store } from "../stores/store";
import * as SwaggerService from "../services/swagger";

class SwaggerTest extends React.Component {
  public componentDidMount() {
    SwaggerService.getSpec();
  }

  public render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

export default SwaggerTest;
