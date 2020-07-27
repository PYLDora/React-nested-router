import React, { Component } from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
// import Router from './router';


class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toB: false,
      toC: false
    }
  }
  cClick = () => {
    this.props.history.push('/b/test')


  }
  bClick = () => {
    this.props.history.push('/b')


  }
  render() {

    return (
      <div history={this.props.history}>
        <Button onClick={() => { this.bClick() }} >显示b.js的内容</Button>
        <Button onClick={() => { this.cClick() }} >显示c.js的内容</Button>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Show);
