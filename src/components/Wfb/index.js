import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import PinyinMatch from '../../utils/pinyinindex'
import TransactionList from './transactionList'
import AnimateComponent from "../AnimateComponent";
import Popup from '../popup'
import * as actionCreators from "./store/actionCreators";
import axios from 'axios'
import store from '../../store'
import zhengshu from '../../assets/images/zhengshu.png'
import * as Api from "../../api";
import * as actionTypes from "./store/actionTypes";
import InfoList from "./infoList";
class Wfb extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            tabStatus: 'transaction',//切换交易信息和申报信息列表，默认交易信息
            menuList:{},//遍历显示搜索结果列表
            menuListBox:{},//保存所有数据

            declareInfoBox:this.props.declareInfo,//用于存储申报搜索结果
            declareSearchList:{
                enterprise:[],
                service:[]
            },//筛选结果
        }
    }

    componentWillMount(){}

    componentDidUpdate(){}

    // shouldComponentUpdate(){}

    componentDidMount(){
        axios.get(Api.GET_FIND_DATA).then(res=>{
            if(res.data.success){
                store.dispatch({
                    type: actionTypes.GET_FIND_DATA,
                    result: res.data.transactionData
                })
            }
            this.setState({dataInfo:this.props.dataInfo},()=>{})
        }).catch(err=>{
            console.log(err)
        })
        axios.get(Api.GET_FIND_ALL).then(res=>{
            if(res.data.success){
                store.dispatch({
                    type: actionTypes.GET_MENU_LIST,
                    result: res.data.companyAndProviderVo
                })
            }
            this.setState({menuList:this.props.transactionInfo,menuListBox:this.props.transactionInfo},()=>{
                this.getProductList(null,this.state.menuList.company[0].companyID)
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    getProductList=(item,first)=>{
        axios.get(Api.GET_FIND_PRODUCT+`?companyID=${item?item.companyID:first}`).then(res=>{
            if(res.data.success){
                store.dispatch({
                    type: actionTypes.GET_PRODUCT_LIST,
                    result: res.data.productInformationVo
                })
                this.setState({idBox:item?item.companyID:null,productInfo:this.props.productInfo},()=>{
                    this.setState({orderID:this.props.productInfo[0].orderID},()=>{
                        this.getInfoList(this.state.orderID)
                    })
                })
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    getInfoList=(first)=>{
        axios.get(Api.GET_FIND_TRADE+`?orderID=${first}`).then(res=>{
            if(res.data.success){
                store.dispatch({
                    type: actionTypes.GET_TRADE_LIST,
                    result: res.data.tradeInformationVos
                })
                this.setState({orderIdBox:first,tradeInfo:this.props.tradeInfo})
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    searchMethod=(keyword,list)=>{
        let boxSearchList={company:[],productProvider:[]}
        if(list.company && list.productProvider){
            list.company.map((v)=>{
                if (PinyinMatch.match(v.companyName.toString().toUpperCase(), keyword)) {
                    boxSearchList.company.push(v)
                }
            })
            list.productProvider.map((v)=>{
                if (PinyinMatch.match(v.providerName.toString().toUpperCase(), keyword)) {
                    boxSearchList.productProvider.push(v)
                }
            })
        }
        return boxSearchList
    }

    selectCompany=(e,type)=>{
        let {menuList,menuListBox}=this.state
        let keyword = e.target.value.replace(/\s+/g, '').toUpperCase().toString()
        if(type==='transaction'){
            let listBox=this.searchMethod(keyword,menuList)
             this.setState({menuList:listBox})
        }else{

        }
        if(keyword===''){this.setState({menuList:menuListBox})}
    }

    handleSearchList=(type)=>{
        //切换交易和申报按钮
        this.refs.search.value=''//清空输入框的值
        if(type=='transaction'){//还原列表
            this.setState({
                tabStatus:'transaction',
                transactionInfoBox:this.props.transactionInfo
            })
        }else{
            this.setState({
                tabStatus:'declare',
                declareInfoBox:this.props.declareInfo
            })
        }
    }

    handleSelectId=(item)=>{
        this.getProductList(item)
    }

    componentWillUpdate(){
        // console.log(this.props.productInfo)
    }

    render(){
        let { tabStatus, declareInfoBox ,dataInfo} = this.state
        return (
            <div className='wfb-container'>
                <div className="wfb-top boxShadow">
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                交易次数：<span><AnimateComponent value={dataInfo?dataInfo.dealCount:null}/></span>
                            </div>
                            <div className="text">
                                交易金额：<span><AnimateComponent value={dataInfo?dataInfo.amount:null}/><i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                申请兑现次数：<span><AnimateComponent value={dataInfo?dataInfo.applicationCount:null}/></span>
                            </div>
                            <div className="text">
                                申请兑现金额：<span><AnimateComponent value={dataInfo?dataInfo.discountMoney:null}/><i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                兑现次数：<span><AnimateComponent value={dataInfo?dataInfo.changeCount:null}/></span>
                            </div>
                            <div className="text">
                                兑现金额：<span><AnimateComponent value={dataInfo?dataInfo.changeAmount:null}/><i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                最大单笔交易金额：<span><AnimateComponent value={dataInfo?dataInfo.maxAmount:null}/><i>￥</i></span>
                            </div>
                            <div className="text">
                                最小单笔交易金额：<span><AnimateComponent value={dataInfo?dataInfo.minAmount:null}/><i>￥</i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wfb-bottom boxShadow">
                    <Popup className='popup-container'
                       style={{
                            width: '820px',
                            height: '360px',
                            marginLeft: '-410px',
                            marginTop: '-180px'
                       }}
                           ref={openPopup=>this.openPopup=openPopup}
                    >
                        <div className="box">
                            <div className="title">星级预警信息</div>
                            <div className="box-style">
                                <div className="box-left">
                                    <img src={zhengshu} alt=""/>
                                    <div className="star">
                                        <i></i><i></i><i></i><i></i><i className='star-style'></i>
                                    </div>
                                    <span></span>
                                </div>
                                <div className="box-right">
                                    <div className="text">企业注册名称：成都香菇年文化传播有限公司</div>
                                    <div className="text">企业注册时间：2017-10-17 10:25:27</div>
                                    <div className="text">企业评星时间：2017-10-17 10:25:50</div>
                                    <div className="text">星级修改时间：2017-12-19 10:25:27</div>
                                    <div className="text">星级修改账号：zhangqi1983</div>
                                </div>
                            </div>
                        </div>
                    </Popup>
                    <div className='left'>
                        <div className="tab">
                            <div className={tabStatus=='transaction'?"active title tab1":"title tab1"}
                                 onClick={()=>{this.handleSearchList('transaction')}}
                            >交易信息<span></span></div>
                            <div className={tabStatus=='declare'?"active title tab1 ":"title tab1"}
                                 onClick={()=>{this.handleSearchList('declare')}}
                            >申报信息</div>
                        </div>
                        <div className="search">
                            <input type="text" ref='search' placeholder='请输入企业(服务商)名称查询' onChange={(e) => {
                                this.selectCompany(e,tabStatus)
                            }}/>
                            <svg className="icon-svg">
                                <use xlinkHref='#icon-sousuo'></use>
                            </svg>
                        </div>
                        {tabStatus=='transaction'?
                            <div className="content">
                                <div className="title">企业</div>
                                <div className="box-list">
                                    <span></span>
                                    <ul>
                                        {this.state.menuList.company?this.state.menuList.company.map((item,index)=>{
                                            return (
                                                <li key={index}
                                                    className={item.companyID===this.state.idBox?'boxShadow':null}
                                                    onClick={()=>{this.handleSelectId(item)}}>
                                                    <span></span><i className={item.credit>3?'color':null}>{item.credit}星</i>
                                                    <div className="text">{item.companyName}</div>
                                                </li>
                                            )
                                        }):null}
                                    </ul>
                                </div>
                                <div className="title">服务商</div>
                                <div className="box-list">
                                    <span></span>
                                    <ul>
                                        {this.state.menuList.productProvider?this.state.menuList.productProvider.map((item,index)=>{
                                            return (
                                                <li key={index}>
                                                    <span></span><i className={item.credit>3?'color':null}>{item.credit}星</i>
                                                    <div className="text">{item.providerName}</div>
                                                </li>
                                            )
                                        }):null}
                                    </ul>
                                </div>
                            </div>
                        :
                            <div className="content">
                                <div className="title">企业</div>
                                <div className="box-list" style={{height:'400px'}}>
                                    <span></span>
                                    <ul>
                                        {declareInfoBox.enterprise.map((item,index)=>{
                                            return (
                                                <li key={index}>
                                                    <span></span><i className={item.star>3?'color':null}>{item.star}星</i>
                                                    {item.company}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                {/*<div className="title">服务商</div>
                                <div className="box-list">
                                    <span></span>
                                    <ul>
                                        {declareInfoBox.service.map((item,index)=>{
                                            return (
                                                <li key={index}>
                                                    <span></span><i className={item.star>3?'color':null}>{item.star}星</i>
                                                    {item.company}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>*/}
                            </div>
                        }
                        <span></span>
                    </div>
                    {this.state.productInfo?<TransactionList
                        type={this.state.tabStatus}
                        productInfo={this.state.productInfo}
                        orderID={this.state.orderID}
                    />:null}
                    <InfoList type={this.state.tabStatus}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    transactionInfo: state.wfb.transactionInfo,
    productInfo:state.wfb.productInfo,
    tradeInfo: state.wfb.tradeInfo,
    dataInfo:state.wfb.dataInfo,
    declareInfo: state.wfb.declareInfo,
})

const mapDispatchToProps=(dispatch)=>({
    getCompanyList(){
        dispatch(actionCreators.getCompanyInfoList())
    },
    transaction(options){
        dispatch(actionCreators.getTransactionList(options))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Wfb)