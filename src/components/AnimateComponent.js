import React from 'react';

// import { InputNumber, Button, Checkbox } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

TweenOne.plugins.push(Children);

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      formatMoney: false,
    };
  }
  static defaultProps={
    duration:2000,
    value:0,
  }

  render() {
    const {value, duration}=this.props;
    return (
          <TweenOne
            animation={{
              Children: { value:  value||0, floatLength: 0 },
              duration: `${duration}`,
            }}
          >
            0
          </TweenOne>
    );
  }
}
export default Demo;
