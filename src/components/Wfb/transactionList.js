import React,{PureComponent} from 'react'
import axios from "axios";
import {connect} from 'react-redux'
import * as Api from "../../api";
import store from "../../store";
import * as actionTypes from "./store/actionTypes";
import moment from 'moment'
import lodashId from "lodash/uniqueId";

class TransactionList extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            idBox:'',
            idDeclareBox: ''
        }
    }
    componentDidMount(){}

    getInfo=(item)=>{
        axios.get(Api.GET_FIND_TRADE+`?orderID=${item.orderID}`).then(res=>{
            if(res.data.success){
                store.dispatch({
                    type: actionTypes.GET_TRADE_LIST,
                    result: res.data.tradeInformationVos
                })
                console.log(res)
                this.setState({idBox:item.orderID,tradeInfo:this.props.tradeInfo})
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    handleChange=(item)=>{
        this.getInfo(item)
    }

    handleDeclareChange=(item)=>{
        this.getDeclareInfo(item)
    }

    getDeclareInfo=(item)=>{
        axios.get(Api.GET_DECLARE_INFO+`?id=${item.declareNo}`).then(res=>{
            if(res.data.success){
                store.dispatch({
                    type: actionTypes.GET_DECLARE_INFO,
                    result: res.data.scCompanyInfo
                })
                this.setState({idDeclareBox:item.declareNo,declareDetailInfo:this.props.declareDetailInfo},()=>{
                    console.log(this.state.declareDetailInfo)
                })
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        const {declareOrderInfo}=this.props
        return (
            <div className='middle'>
                <span></span>
                {this.props.type=='declare'?
                    <div className="list-box">
                        {declareOrderInfo?declareOrderInfo.map((item)=>{
                            return (
                                <div className={item.declareNo===this.state.idDeclareBox?'active list list1':'list list1'}
                                     key={lodashId()}
                                     onClick={()=>{this.handleDeclareChange(item)}}
                                >
                                    <div className="title">{item.declarePolicyName}</div>
                                    <div className="text">申报单号：{item.declareNo}</div>
                                    <div className="text">申报时间：{item.declareTime}</div>
                                </div>
                            )
                        }):null}
                    </div>
                    :
                    <div className="list-box">
                        {this.props.productInfo?this.props.productInfo.map((item)=>{
                            return (
                                <div className={item.orderID===this.state.idBox?'active list':'list'}
                                     key={item.orderID}
                                     onClick={()=>{this.handleChange(item)}}
                                >
                                    <div className="title">{item.productName}</div>
                                    <div className="text">订单号：{item.orderID}</div>
                                    <div className="text">交易金融：¥ {item.price}</div>
                                    <div className="text">交易时间：{moment(item.createTime).format('YYYY-MM-DD')}</div>
                                    <div className="text">交易服务商：{item.providerName}</div>
                                    <span></span>
                                </div>
                            )
                        }):null}
                    </div>
                }

            </div>
        )
    }

}
const mapStateToProps=(state)=>({
    tradeInfo: state.wfb.tradeInfo,
    declareDetailInfo:state.wfb.declareDetailInfo
})
export default connect(mapStateToProps,null)(TransactionList)