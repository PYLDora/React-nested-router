import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class C extends Component {
  render() {
    return (
      <div>
        <div >
          我是C页面
      </div>
        <div>
          现在测试嵌套路由，如果我出现就代表成功了

      </div>
      </div>
    )
  }
}
export default withRouter(C);