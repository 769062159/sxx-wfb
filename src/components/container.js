import React from 'react';
import './container.less';
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
  handleChange(value){}

  componentDidMount(){

  }
  render(){
    let {BoxStyle,leftText,showRight}=this.props;
      showRight=false;
    return(
      <div style={BoxStyle} className='marginTop boxShadow'>
        <div style={{height:"48px"}}>
          <span>{leftText}</span>
          {showRight?
              <span>
              <Select
                 className='customSelect'
                 defaultValue="lucy"
                 style={{ width: 200}}
                 onChange={(val)=>this.handleChange(val)}
               >
                   <Option value="jack">最近一周</Option>
                   <Option value="lucy">最近一月</Option>
                   <Option value="Yiminghe">最近一年</Option>
               </Select>
              </span>
            :<span></span>
          }

        </div>
        <div>
        {this.props.children}
        </div>
      </div>
    )
  }
}
