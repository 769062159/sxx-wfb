import React,{PureComponent} from 'react'
import axios from "axios";
import {connect} from 'react-redux'
import * as Api from "../../api";
import store from "../../store";
import * as actionTypes from "./store/actionTypes";
import InfoList from "./infoList";

class TransactionList extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            idBox:''
        }
    }
    componentDidMount(){
        // console.log(this.props.orderID)
        // this.getInfo(null,this.props.orderID)
    }

    getInfo=(item,first)=>{
        axios.get(Api.GET_FIND_TRAND+`?orderID=${item?item.orderID:first}`).then(res=>{
            if(res.data.success){
                store.dispatch({
                    type: actionTypes.GET_TRADE_LIST,
                    result: res.data.tradeInformationVos
                })
                this.setState({idBox:item.orderID,tradeInfo:this.props.tradeInfo})
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    handleChange=(item)=>{
        this.getInfo(item)
    }

    render(){
        return (
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
                        {this.props.productInfo?this.props.productInfo.map((item)=>{
                            return (
                                <div className={item.orderID===this.state.idBox?'boxShadow list':'list'}
                                     key={item.orderID}
                                     onClick={()=>{this.handleChange(item)}}
                                >
                                    <div className="title">{item.productName}</div>
                                    <div className="text">订单号：{item.orderID}</div>
                                    <div className="text">交易金融：¥ {item.price}</div>
                                    <div className="text">交易时间：{item.createTime}</div>
                                    <div className="text">交易服务商：{item.providerName}</div>
                                </div>
                            )
                        }):null}
                    </div>
                }
                <InfoList type={this.props.type} tradeInfo={this.state.tradeInfo}/>
            </div>
        )
    }

}
const mapStateToProps=(state)=>({
    tradeInfo: state.wfb.tradeInfo
})
export default connect(mapStateToProps,null)(TransactionList)