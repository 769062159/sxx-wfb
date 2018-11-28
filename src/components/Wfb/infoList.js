import React,{PureComponent,Fragment} from 'react'



export default class InfoList extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            // menuList:this.props.params
        }
    }

    render(){
        const {tradeInfo}=this.props
        return (
                <div className='right-container'>
                    <div className="title">{this.props.type=='transaction'?'交易信息':'申报信息'}</div>
                    {this.props.type=='transaction'?
                        <table>
                            <tbody>
                            <tr>
                                <th>购买商品名称：{tradeInfo?tradeInfo.productName:null}</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>订单号：{tradeInfo?tradeInfo.orderID:null}</td>
                                <td>交易时间：{tradeInfo?tradeInfo.createTime:null}</td>
                                <td style={{display:'flex',flexWrap:'nowrap'}}>交易金额：<span>¥ {tradeInfo?tradeInfo.price:null}</span></td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>企业：{tradeInfo?tradeInfo.companyName:null}</td>
                                <td>注册时间：{tradeInfo?tradeInfo.createTime:null}</td>
                                <td>注册电话：{tradeInfo?tradeInfo.ownerMobile:null}</td>
                            </tr>
                            <tr>
                                <td>星级：<i></i><i></i><i></i><i></i><i></i></td>
                                <td>信用券申领时间：{tradeInfo?tradeInfo.createTime:null}</td>
                                <td>创新信用券状态：{tradeInfo?tradeInfo.statusName:null}</td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>服务商：{tradeInfo?tradeInfo.providerName:null}</td>
                                <td>注册时间：{tradeInfo?tradeInfo.createTime:null}</td>
                                <td>注册电话：{tradeInfo?tradeInfo.providerRegistPhone:null}</td>
                            </tr>
                            <tr>
                                <td>星级：<i></i><i></i><i></i><i></i><i></i></td>
                                <td>信用券兑现时间：{tradeInfo?tradeInfo.createTime:null}</td>
                                <td>创新信用券状态：{tradeInfo?tradeInfo.statusName:null}</td>
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
        )
    }
}