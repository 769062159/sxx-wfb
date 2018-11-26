import React, {Fragment} from 'react';

// import styles from "./tab.less";
import { browserHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import {Row,Col} from 'antd'

import AnimateComponent from '../../components/AnimateComponent';
import Interaction from "../../components/Interaction";
/*const styleBorder={
  color: "#22A5F7",
  border:" 1px solid #22A5F7"
}*/
export default class TabBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      path:"datas"
    }
  }

componentDidMount(){

}
  render() {
    const PathLists=[
      {
        key:"datas",
        path:"/datas",
        content:"运营数据"
      },{
        key:"innovation",
        path:"/innovation",
        content:"双创数据"
      },{
            key:"wfb",
            path:"/wfb",
            content:"交易信息"
        },

  ];

    return (
    <Fragment>
    <div className='bar-container'>
        <Row>
            <Col span={6}>
                <div className='bar-logo'>
                  <img alt="" src={require("../../assets/images/logo2.svg")}/>
                </div>
            </Col>
            <Col span={10}>
                <div className='tab-box'>
                    <ul>
                        {PathLists.map((val)=>{
                            return <li key={val.key}>
                                <NavLink to={val.path} activeClassName='active'>
                                    {val.content}
                                </NavLink>
                            </li>
                        })}
                        {this.state.path==="datas"?<Interaction/>:<li>互动活动</li>}
                    </ul>
                </div>
            </Col>
            <Col span={6} className='userStyle'>
              <span className='userState'>
                <div className='bg'><span><AnimateComponent value={876}/></span></div>
              </span>
              <span className='userRight'>
                <span>双创中心</span>
                <img alt="" src={require("../../assets/images/logout.svg")}/>
              </span>
            </Col>
        </Row>




    </div>
        <div className='bottom'></div>
    </Fragment>
    );
  }
}
