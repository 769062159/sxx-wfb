import React,{Component,Fragment} from 'react'
import ClickMap from "../ClickHotMap";
import NonContainerBox from '../nonContainer';
import AnimateComponent from '../AnimateComponent';
import PupleTable from '../PupleTable';
import BarTable from '../BarTable';
class Home extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    getStackInfos(){
        const data=[
            {
                data:93,
                tag:"孵化器数量"
            },
            {
                data:1790000,
                tag:"孵化空间面积"
            },
            {
                data:6795,
                tag:"孵化企业数量"
            },
            {
                data:58,
                tag:"楼宇孵化数量"
            },
            {
                data:984,
                tag:"楼宇孵化面积"
            },
            {
                data:9208,
                tag:"楼宇企业数量"
            },

        ]
        return data;
    }

    getComptyInfos(){
        const data=[
            {
                data:410,
                tag:"种子企业"
            },
            {
                data:60,
                tag:"瞪羚企业"
            },
            {
                data:2,
                tag:"独角兽企业"
            },
            {
                data:6,
                tag:"龙头企业"
            },
        ]
        return data;
    }

    getFinnacingInfos(){
        const data=[
            {
                data:3012,
                tag:"种子轮"
            },
            {
                data:12629,
                tag:"A轮融资"
            },
            {
                data:863,
                tag:"B轮融资"
            },
            {
                data:590,
                tag:"C轮及以上"
            },
        ]
        return data;
    }
    render() {
        const DataSourceOne={
            BoxStyle:{
                width:"auto",
                height:"170px"
            },
            leftText: "孵化载体信息",
            showRight:false,
        }
        const DataSourceTwo={
            BoxStyle:{
                width:"auto",
                height:"170px",
                marginTop:"10px"
            },
            leftText: "孵化企业信息",
            showRight:true,
            rightText: " 企业总数 69 ",
            RightStyle:{
                color:"#8DFF00",
                fontSize:"15px"
            }
        }
        const DataSourceTree={
            BoxStyle:{
                width:"auto",
                height:"271px",
                marginTop:"10px",
                marginRight:"10px",
            },
            InnerStyle:{
                display: "flex",
            },
            leftText: "投融资情况",
            showRight:false,
        }
        const DataSourceFour={
            BoxStyle:{
                width:"auto",
                height:"271px",
                marginTop:"10px"
            },
            leftText: "产业类型",
            showRight:false,
        }
        const DataSourceFive={
            BoxStyle:{
                width:"auto",
                height:"315px",
                marginTop:"10px",
                marginRight:"10px",
            },
            leftText: "高层次人才数量",
            showRight:false,
        }
        const DataSourceSix={
            BoxStyle:{
                width:"auto",
                height:"315px",
                marginTop:"10px",
            },
            leftText: "知识产权",
            showRight:true,
            rightText:"总数 246",
            RightStyle:{
                color:" #33D6CB",
                fontSize:"15px"
            }
        }
        const PupSourceOne={
            PupStyle:{
                width:"100%",
                height:"270px"
            },
            data : [
                [
                    [18,10,9426844,'',1990],
                    [2,50,9426844,'',1990],[9,45,48426844,'',1990],
                    [4,75,28426844,'',1990],[45,48,1426844,'',1990],
                    [26,0,19426844,'',1990],[50,3,28426844,'',1990],
                    [36,100,118426844,'',1990], [42,20,1426844,'',1990],
                    [25,58,4268426844,'5\n诺奖',25],
                ],
                [
                    [48,18,1426844,'',1990],[34,80,9426844,'',1990],
                    [1,90,89426844,'',1990],[49,40,11426844,'',1990],
                    [12,17,18426844,'',1990],[30,9,18426844,'',1990],
                    [5,5,1218426844,'281\n市千',15],[10,90,1518426844,'281\n省千',15],
                    [40,15,1512426844,'117\n国千',15],[45,95,1968426844,'19\n院士',15]
                ]
            ],
            redStyle:{
                fontSize:"30",
                lineHeight:"20",
            },
            blueStyle:{
                fontSize:"20",
                lineHeight:"20",
            }
        }
        const BarSourceOne={
            BarStyle:{
                width:"100%",
                height:"270px"
            },
            xdata : ["商标","著作","专利"],
            ydata : [47, 73, 126],
        }
        return(
            <Fragment>
                <div  className='container'>
                    <div className='map'>
                        <ClickMap/>
                    </div>
                    <div className='TopDetails'>
                        <NonContainerBox {...DataSourceOne} >
                            <ul style={{marginTop:"-5px"}}>
                                {this.getStackInfos().map((val,index)=>{
                                    return <li key={index}>
                                        <div style={{color:"#00fefb"}}><AnimateComponent value={val.data}/></div>
                                        <div>{val.tag}</div>
                                    </li>
                                })}
                            </ul>
                        </NonContainerBox>
                        <NonContainerBox {...DataSourceTwo} >
                            <ul style={{marginTop:"-5px"}}>
                                {this.getComptyInfos().map((val,index)=>{
                                    return <li key={index}>
                                        <div style={{color:"#fff600"}}><AnimateComponent value={val.data}/></div>
                                        <div>{val.tag}</div>
                                    </li>
                                })}
                            </ul>
                        </NonContainerBox>
                        <div className='TreeRow'>
                            <NonContainerBox {...DataSourceTree}>
                                <div style={{background:'url('+ require("../../assets/images/tb_fws.png")+') no-repeat',backgroundSize:"100%",height:"180px", width:"180px", textAlign: "center",paddingTop:"30px",fontFamily: "DIGIT",margin:"15px 0 15px 25px"}}>
                                    <div style={{fontSize:"55px",color:"#8DFF00"}}><AnimateComponent value={3590}/></div>
                                    <div style={{marginTop:"-15px", fontSize:"23px"}}>企业总数</div>
                                </div>
                                <div style={{marginLeft:"-10px"}}>
                                    <ol style={{width:"100%"}}>
                                        {this.getFinnacingInfos().map((val,index)=>{
                                            return <li key={index} style={{listStyle:"none",textAlign:"left"}}>
                                                <span className='' style={{color:"#FFF", fontSize:"23px",whiteSpace:'nowrap' }}>{val.tag}</span>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                                <div>
                                    <ol style={{width:"100%"}}>
                                        {this.getFinnacingInfos().map((val,index)=>{
                                            return <li key={index} style={{listStyle:"none"}}>
                                                <span style={{color:"#8DFF00",fontSize:"32px", fontFamily:"DIGIT", marginLeft:"-10px"}}>{val.data}</span>
                                            </li>
                                        })}
                                    </ol>
                                </div>
                            </NonContainerBox>
                            <NonContainerBox {...DataSourceFour}>
                                <ul style={{margin:"20px"}}>
                                    <li>
                                        <div><img alt="" src={require('../../assets/images/electronic.svg')} style={{width:"50%"}}/></div>
                                        <div style={{color:"#3af600",fontSize:"40px"}}><AnimateComponent value={136}/></div>
                                        <div>电子信息</div>
                                    </li>
                                    <li>
                                        <div ><img alt="" src={require('../../assets/images/bio.svg')} style={{width:"50%"}}/></div>
                                        <div style={{color:"#3af600",fontSize:"40px"}}><AnimateComponent value={8}/></div>
                                        <div>生物医药</div>
                                    </li>
                                    <li>
                                        <div ><img alt="" src={require('../../assets/images/neweco.svg')} style={{width:"50%"}}/></div>
                                        <div style={{color:"#3af600",fontSize:"40px"}}><AnimateComponent value={12}/></div>
                                        <div>新经济</div>
                                    </li>
                                </ul>
                            </NonContainerBox>
                        </div>
                        <div className='FourRow'>
                            <NonContainerBox {...DataSourceFive}>
                                <PupleTable {...PupSourceOne}/>
                            </NonContainerBox>
                            <NonContainerBox {...DataSourceSix}>
                                <BarTable {...BarSourceOne}/>
                            </NonContainerBox>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>({})

export default Home