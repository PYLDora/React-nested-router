import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class B extends Component {
  render() {
    return (
      <div >
        hello 呀～
      </div>
    )
  }
}
export default withRouter(B);