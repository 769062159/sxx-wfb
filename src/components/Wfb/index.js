import React,{Component} from 'react'
import { connect } from 'react-redux'
import PinyinMatch from '../../utils/pinyinindex'
import InfoList from "./infoList";
import AnimateComponent from "../AnimateComponent";
import Popup from '../popup'
import * as actionCreators from "./store/actionCreators";
import axios from 'axios'
import store from '../../store'

import zhengshu from '../../assets/images/zhengshu.png'
import * as Api from "../../api";
import * as actionTypes from "./store/actionTypes";
class Wfb extends Component{
    constructor(props){
        super(props)
        this.state={
            tabStatus: 'transaction',//切换交易信息和申报信息列表，默认交易信息
            menuList:{},//遍历显示搜索结果列表
            menuListBox:{},//保存所有数据

            transactionInfoBox:{},//用于存储交易搜索结果
            transactionSearchList:{
                company:[],
                productProvider:[]
            },//筛选结果

            declareInfoBox:this.props.declareInfo,//用于存储申报搜索结果
            declareSearchList:{
                enterprise:[],
                service:[]
            },//筛选结果
        }
    }

    componentWillMount(){}

    componentDidMount(){
        axios.get(Api.GET_FIND_ALL).then(res=>{
            if(res.data.success){
                store.dispatch({
                    type: actionTypes.GET_MENU_LIST,
                    result: res.data.companyAndProviderVo
                })
            }
            this.setState({menuList:this.props.transactionInfo,menuListBox:this.props.transactionInfo})

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
        this.setState({idBox:item.id})
        if(item.star>3){
            this.openPopup.handleOpenPopup()
        }
    }

    render(){
        let { tabStatus, transactionInfoBox, declareInfoBox } = this.state
        return (
            <div className='wfb-container'>
                <div className="wfb-top boxShadow">
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                交易次数：<span><AnimateComponent value={100}/></span>
                            </div>
                            <div className="text">
                                交易金额：<span><AnimateComponent value={10000}/><i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                申请兑换次数：<span><AnimateComponent value={5}/></span>
                            </div>
                            <div className="text">
                                申请兑换金额：<span><AnimateComponent value={10000}/><i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                兑换次数：<span><AnimateComponent value={25}/></span>
                            </div>
                            <div className="text">
                                兑换金额：<span><AnimateComponent value={350000}/><i>￥</i></span>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className="list">
                        <div className="box">
                            <div className="text">
                                最大单笔交易金额：<span><AnimateComponent value={2500}/></span>
                            </div>
                            <div className="text">
                                最小单笔交易金额：<span><AnimateComponent value={100}/><i>￥</i></span>
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
                                <div className="box-list">
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
                                <div className="title">服务商</div>
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
                                </div>
                            </div>
                        }
                        <span></span>
                    </div>
                    <InfoList type={this.state.tabStatus}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    transactionInfo: state.wfb.transactionInfo,
    declareInfo: state.wfb.declareInfo
})

const mapDispatchToProps=(dispatch)=>({
    getCompanyList(){
        dispatch(actionCreators.getCompanyInfoList())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Wfb)