import * as React from 'react';
var SwaggerUi = require('swagger-ui');

class SwaggerTest extends React.Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      url: `http://localhost:3000/swagger.json`,
      presets: [SwaggerUi.presets.apis],
    });
  }

  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

export default SwaggerTest;