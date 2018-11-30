import React,{PureComponent,Fragment} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import starY from '../../assets/images/starY.png'
import starB from '../../assets/images/star.svg'
import starG from '../../assets/images/starG.png'
import lodashId from 'lodash/uniqueId'
class InfoList extends PureComponent{
    constructor(props){
        super(props)
        this.state={}
    }

    getStar=(star,num)=>{
        let items = [];
        if(star){
            items = []
            if(num==1){
                for (let i = 0; i < star; i++) {
                    items.push(<img key={lodashId()} className='i1' src={starY}></img>);
                }
            }else{
                for (let i = 0; i < star; i++) {
                    items.push(<img key={lodashId()} className='i1' src={starB}></img>);
                }
            }
            for(let j = 0; j < (5-star); j++){
                items.push(<img key={lodashId()} className='i2' src={starG}></img>);
            }
            return items
        }
    }

    render(){
        const {tradeInfo,declareDetailInfo}=this.props
        return (
                <div className='right-container'>
                    <div className="title">
                        {this.props.type=='transaction'?'交易信息':'申报信息'}
                        <span></span>
                    </div>
                    {this.props.type=='transaction'?
                        <table>
                            <tbody>
                            <tr>
                                <th colSpan={3}>购买商品名称：{tradeInfo?tradeInfo.productName:null}</th>
                            </tr>
                            <tr>
                                <td>订单号：{tradeInfo?tradeInfo.orderID:null}</td>
                                <td>交易时间：{tradeInfo?moment(tradeInfo.orderCreateTime).format('YYYY-MM-DD'):null}</td>
                                <td style={{display:'flex',flexWrap:'nowrap'}}>交易金额：
                                    <span>
                                        ¥ {tradeInfo?tradeInfo.price>10000?Math.ceil(tradeInfo.price/10000)+'万':tradeInfo.price:null}
                                    </span>
                                </td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>企业：{tradeInfo?tradeInfo.companyName:null}</td>
                                <td>注册时间：{tradeInfo?moment(tradeInfo.registerDate).format('YYYY-MM-DD'):null}</td>
                                <td>注册电话：{tradeInfo?tradeInfo.ownerMobile:null}</td>
                            </tr>
                            <tr>
                                <td>星级：
                                    {tradeInfo? this.getStar(tradeInfo.companyCredit,1) :null}
                                </td>
                                <td>信用券申领时间：{tradeInfo?moment(tradeInfo.companyCouponCreateTime).format('YYYY-MM-DD'):null}</td>
                                <td>创新信用券状态：{tradeInfo?tradeInfo.isUse:null}</td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>服务商：{tradeInfo?tradeInfo.providerName:null}</td>
                                <td>注册时间：{tradeInfo?moment(tradeInfo.providerCreateTime).format('YYYY-MM-DD'):null}</td>
                                <td>注册电话：{tradeInfo?tradeInfo.providerRegistPhone:null}</td>
                            </tr>
                            <tr>
                                <td>星级：
                                    {tradeInfo?this.getStar(tradeInfo.providerCredit,1):null}
                                </td>
                                <td>信用券兑现时间：{tradeInfo?moment(tradeInfo.providerCouponCreateTime).format('YYYY-MM-DD'):null}</td>
                                <td>创新信用券状态：{tradeInfo?tradeInfo.providerStatus:null}</td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>信用券编号：<a href="javascript:;">{tradeInfo?tradeInfo.couponID:null}</a></td>
                                <td>信用券发放时间：{tradeInfo?moment(tradeInfo.couponCreateTime).format('YYYY-MM-DD'):null}</td>
                                <td>兑现审核人：{tradeInfo?tradeInfo.auditAdmin:null}</td>
                            </tr>
                            <tr>
                                <td>审核状态：{tradeInfo?tradeInfo.statusName:null}</td>
                                <td>审核时间：{tradeInfo?moment(tradeInfo.auditTime).format('YYYY-MM-DD'):null}</td>
                                <td>审核是否通过：{tradeInfo?tradeInfo.delete?'已通过':'未通过':null}</td>
                            </tr>
                            </tbody>
                        </table>
                    :
                        <table>
                            <tbody>
                            <tr>
                                <th colSpan={3}>申报政策名称：{declareDetailInfo?declareDetailInfo.declarePolicyName:null}</th>
                            </tr>
                            <tr>
                                <td>申报单号：{declareDetailInfo?declareDetailInfo.declareNo:null}</td>
                                <td>申报时间：{declareDetailInfo?moment(declareDetailInfo.declareTime).format('YYYY-MM-DD'):null}</td>
                                <td>政策归属部门：{declareDetailInfo?declareDetailInfo.policyDepartment:null}</td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>企业：{declareDetailInfo?declareDetailInfo.companyName:null}</td>
                                <td>注册时间：{declareDetailInfo?moment(declareDetailInfo.registerTime).format('YYYY-MM-DD'):null}</td>
                                <td>注册电话：{declareDetailInfo?declareDetailInfo.registerPhone:null}</td>
                            </tr>
                            <tr>
                                <td>星级：
                                    {declareDetailInfo?this.getStar(declareDetailInfo.starLevel,2):null}
                                </td>
                                <td>信用券申领时间：{declareDetailInfo?moment(declareDetailInfo.creditCardApplyTime).format('YYYY-MM-DD'):null}</td>
                                <td>创新信用券状态：{declareDetailInfo?declareDetailInfo.creditCardType:null}</td>
                            </tr>
                            <tr><td></td><td></td><td></td></tr>
                            <tr>
                                <td>信用券编号：<a href="javascript:;">{declareDetailInfo?declareDetailInfo.creditCardNo:null}</a></td>
                                <td>信用券发放时间：{declareDetailInfo?moment(declareDetailInfo.creditCardGrantTime).format('YYYY-MM-DD'):null}</td>
                                <td>申报审核人：{declareDetailInfo?declareDetailInfo.applyName:null}</td>
                            </tr>
                            <tr>
                                <td>审核状态：{declareDetailInfo?declareDetailInfo.auditStatus:null}</td>
                                <td>审核时间：{declareDetailInfo?moment(declareDetailInfo.auditTime).format('YYYY-MM-DD'):null}</td>
                                <td>审核是否通过：{declareDetailInfo?declareDetailInfo.auditPass:null}</td>
                            </tr>
                            </tbody>
                        </table>
                    }
                </div>
        )
    }
}
const mapStateToProps=(state)=>({
    tradeInfo:state.wfb.tradeInfo,
    declareDetailInfo: state.wfb.declareDetailInfo
})
export default connect(mapStateToProps,null)(InfoList)