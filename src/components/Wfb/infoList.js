import React,{Component,Fragment} from 'react'

// let defaultProps={
//
// }
//
// let newProps=Object.assign({},defaultProps)

export default class InfoList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Fragment>
                <div className='middle'>
                    <span></span>
                    {this.props.type=='declare'?
                        <div className="list-box">
                            <div className="list list1">
                                <div className="title">创业启动资金正常</div>
                                <div className="text">申报单号：10988763299762393</div>
                                <div className="text">申报时间：2018-10-12 14:23:34</div>
                            </div>
                            <div className="list list1">
                                <div className="title">创业启动资金正常</div>
                                <div className="text">申报单号：10988763299762393</div>
                                <div className="text">申报时间：2018-10-12 14:23:34</div>
                            </div>
                            <div className="list list1">
                                <div className="title">创业启动资金正常</div>
                                <div className="text">申报单号：10988763299762393</div>
                                <div className="text">申报时间：2018-10-12 14:23:34</div>
                            </div>
                            <div className="list list1">
                                <div className="title">创业启动资金正常</div>
                                <div className="text">申报单号：10988763299762393</div>
                                <div className="text">申报时间：2018-10-12 14:23:34</div>
                            </div>
                            <div className="list list1">
                                <div className="title">创业启动资金正常</div>
                                <div className="text">申报单号：10988763299762393</div>
                                <div className="text">申报时间：2018-10-12 14:23:34</div>
                            </div>
                        </div>
                        :
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
                    }

                </div>
                <div className='right'>
                    <div className="title">{this.props.type=='transaction'?'交易信息':'申报信息'}</div>
                    {this.props.type=='transaction'?
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
                                <td>信用券编号：<a href="javascript:;">181025142410441</a></td>
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
                    :
                        <table>
                            <tbody>
                            <tr>
                                <th>申报政策名称：创业启动资金</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>申报单号：10988763299762393</td>
                                <td>申报时间：2018-10-12 14:32:34</td>
                                <td>政策归属部门：-</td>
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
                                <td>创新信用券状态：已下载</td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>信用券编号：<a href="javascript:;">181025142410441</a></td>
                                <td>信用券发放时间：2018-07-01 10:17:26</td>
                                <td>申报审核人：黄琪</td>
                            </tr>
                            <tr>
                                <td>审核状态：已审核</td>
                                <td>审核时间：2018-07-01 10:17:26</td>
                                <td>审核是否通过：是</td>
                            </tr>
                            </tbody>
                        </table>
                    }

                </div>
            </Fragment>
        )
    }
}