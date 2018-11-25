import React,{Component} from 'react'
import {connect} from 'react-redux'
import PinyinMatch from '../../utils/pinyinindex'
import InfoList from "./infoList";
class Wfb extends Component{
    constructor(props){
        super(props)
        this.state={
            tabStatus: 'transaction',//切换交易信息和申报信息列表，默认交易信息

            transactionInfoBox:this.props.transactionInfo,//用于存储交易搜索结果
            transactionSearchList:{
                enterprise:[],
                service:[]
            },//筛选结果

            declareInfoBox:this.props.declareInfo,//用于存储申报搜索结果
            declareSearchList:{
                enterprise:[],
                service:[]
            },//筛选结果
        }
    }

    selectCompany=(e,type)=>{
        let {transactionInfoBox,transactionSearchList,declareInfoBox,declareSearchList}=this.state
        let keyword = e.target.value.replace(/\s+/g, '').toUpperCase().toString()
        if(type==='transaction'){
            //每次输入先清空暂存搜索列表
            transactionSearchList.enterprise.length=0
            transactionSearchList.service.length=0
            this.props.transactionInfo.enterprise.map(v=>{
                if (PinyinMatch.match(v.company.toString().toUpperCase(), keyword)) {
                    transactionSearchList.enterprise.push(v)
                }
            })
            this.props.transactionInfo.service.map(v=>{
                if (PinyinMatch.match(v.company.toString().toUpperCase(), keyword)) {
                    transactionSearchList.service.push(v)
                }
            })
            this.setState({transactionInfoBox:transactionSearchList})

        }else{
            declareSearchList.enterprise.length=0
            declareSearchList.service.length=0
            this.props.declareInfo.enterprise.map(v=>{
                if (PinyinMatch.match(v.company.toString().toUpperCase(), keyword)) {
                    declareSearchList.enterprise.push(v)
                }
            })
            this.props.declareInfo.service.map(v=>{
                if (PinyinMatch.match(v.company.toString().toUpperCase(), keyword)) {
                    declareSearchList.service.push(v)
                }
            })
            this.setState({declareInfoBox:declareSearchList})
        }
        if(keyword===''){
            this.setState({
                transactionInfoBox:this.props.transactionInfo,
                declareInfoBox:this.props.declareInfo
            })
        }
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

    handleSelectId=(id)=>{
        this.setState({idBox:id})
    }

    render(){
        let { tabStatus, transactionInfoBox, declareInfoBox } = this.state
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
                            <div className={tabStatus=='transaction'?"active title tab1 boxShadow":"title tab1"}
                                 onClick={()=>{this.handleSearchList('transaction')}}
                            >交易信息<span></span></div>
                            <div className={tabStatus=='declare'?"active title tab1 boxShadow":"title tab1"}
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
                                        {transactionInfoBox.enterprise.map((item,index)=>{
                                            return (
                                                <li key={index} className={item.id==this.state.idBox?'boxShadow':null} onClick={()=>{this.handleSelectId(item.id)}}>
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
                                        {transactionInfoBox.service.map((item,index)=>{
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

export default connect(mapStateToProps,null)(Wfb)