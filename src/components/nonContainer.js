import React from 'react';
import './nonContainer.less';
import { Select } from 'antd';
const { Option } = Select;

export default class box extends React.Component {
  constructor(props){
    super(props)
  }
  static defaultProps={
    BoxStyle:{
      width:"920px",
      height:"530px"
    }
  }
  componentDidMount(){

  }
  render(){
    let {BoxStyle,leftText,showRight,rightText,RightStyle,InnerStyle}=this.props;

    return(
      <div style={BoxStyle} className='marginTop boxShadow'>
        <div style={{height:"48px"}}>
          <span style={{height:"auto"}}>{leftText}</span>
          {showRight?
              <span>
                <div className='rightDiv' style={RightStyle}>{rightText}</div>
              </span>
            :<span></span>
          }
        </div>
        <div style={InnerStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
