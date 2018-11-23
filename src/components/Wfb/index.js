import React from 'react'
import {Row,Col} from 'antd'
class Wfb extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tabStatus:'transaction'
        }
    }
    render(){
        return (
            <div className='wfb-container'>
                <div className="wfb-top boxShadow">
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                交易次数：<span>100</span>
                            </div>
                            <div className="text">
                                交易金额：<span>100<i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                申请兑换次数：<span>100</span>
                            </div>
                            <div className="text">
                                申请兑换金额：<span>100<i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                兑换次数：<span>100</span>
                            </div>
                            <div className="text">
                                兑换金额：<span>100<i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                最大单笔交易金额：<span>100</span>
                            </div>
                            <div className="text">
                                最小单笔交易金额：<span>100<i>￥</i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wfb-bottom boxShadow">
                    <div className='left'>
                        <div className="tab">
                            <div className={this.state.tabStatus=='transaction'?"active title tab1":"title tab1"}
                                 onClick={()=>{this.setState({tabStatus:'transaction'})}}
                            >交易信息<span></span></div>
                            <div className={this.state.tabStatus=='declare'?"active title tab1":"title tab1"}
                                 onClick={()=>{this.setState({tabStatus:'declare'})}}
                            >申报信息</div>
                        </div>
                        <div className="search">
                            <input type="text" placeholder='请输入企业(服务商)名称查询'/>
                            <svg className="icon-svg">
                                <use xlinkHref='#icon-sousuo'></use>
                            </svg>
                        </div>
                        <div className="content">
                            <div className="title">企业</div>
                            <div className="box-list">
                                <span></span>
                                <ul>
                                   <li>
                                       <span></span><i>2星</i>
                                       成都高新物联网科技有限公司
                                   </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        成都香菇年文化传播有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        成都可芳文化传播有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        成都亦呈装饰工程有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        成都心成优势教育咨询有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        成都世宇通教育咨询有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        成都家好旺文化创意有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        青蝌文化创意（成都）有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        成都角儿文化传播有限公司
                                    </li>
                                </ul>
                            </div>
                            <div className="title">服务商</div>
                            <div className="box-list">
                                <span style={{height:'85px'}}></span>
                                <ul>
                                    <li>
                                        <span></span><i>2星</i>
                                        环泰知识产权有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        和君咨询有限公司
                                    </li>
                                    <li>
                                        <span></span><i>2星</i>
                                        联合信用征信股份有限公司四...
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <span></span>
                    </div>
                    <div className='middle'>
                        <span></span>
                        <div className="list-box">
                            <div className="list">
                                <div className="title">企业法律培训</div>
                                <div className="text">订单号：10988763299762393</div>
                                <div className="text">交易金融：¥ 5000.00</div>
                                <div className="text">交易时间：2018-10-12 14:23:34</div>
                                <div className="text">交易服务商：环泰知识产权</div>
                            </div>
                            <div className="list">
                                <div className="title">企业法律培训</div>
                                <div className="text">订单号：10988763299762393</div>
                                <div className="text">交易金融：¥ 5000.00</div>
                                <div className="text">交易时间：2018-10-12 14:23:34</div>
                                <div className="text">交易服务商：环泰知识产权</div>
                            </div>
                            <div className="list">
                                <div className="title">企业法律培训</div>
                                <div className="text">订单号：10988763299762393</div>
                                <div className="text">交易金融：¥ 5000.00</div>
                                <div className="text">交易时间：2018-10-12 14:23:34</div>
                                <div className="text">交易服务商：环泰知识产权</div>
                            </div>
                            <div className="list">
                                <div className="title">企业法律培训</div>
                                <div className="text">订单号：10988763299762393</div>
                                <div className="text">交易金融：¥ 5000.00</div>
                                <div className="text">交易时间：2018-10-12 14:23:34</div>
                                <div className="text">交易服务商：环泰知识产权</div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className="title">交易信息</div>
                        <table>
                            <tbody>
                            <tr>
                                <th>购买商品名称：企业法律培训</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>订单号：10988763299762393</td>
                                <td>交易时间：2018-10-12 14:32:34</td>
                                <td style={{display:'flex',flexWrap:'nowrap'}}>交易金额：<span>¥ 5000.00</span></td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>企业：成都高新物联网科技有限公司</td>
                                <td>注册时间：2018-07-01</td>
                                <td>注册电话：13880966893</td>
                            </tr>
                            <tr>
                                <td>星级：<i></i><i></i><i></i><i></i><i></i></td>
                                <td>信用券申领时间：2018-07-01 10:17:26</td>
                                <td>创新信用券状态：已使用</td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>服务商：环泰知识产权有限公司</td>
                                <td>注册时间：2018-07-01</td>
                                <td>注册电话：13880966893</td>
                            </tr>
                            <tr>
                                <td>星级：<i></i><i></i><i></i><i></i><i></i></td>
                                <td>信用券兑现时间：2018-07-01 10:17:26</td>
                                <td>创新信用券状态：已兑现</td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>信用券编号：181025142410441</td>
                                <td>信用券发放时间：2018-07-01 10:17:26</td>
                                <td>兑现审核人：黄琪</td>
                            </tr>
                            <tr>
                                <td>审核状态：已审核</td>
                                <td>审核时间：2018-07-01 10:17:26</td>
                                <td>审核是否通过：是</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wfb