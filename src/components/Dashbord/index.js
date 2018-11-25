import React from 'react';
import ContainerBox from '../container';
import AnimateComponent from '../AnimateComponent';
import {Progress} from 'antd';
import TradTables from "../TablesChart";
import ZxT from "../newzxt";
import Star from "../Star";
import PupleTable from '../PupleTable'
import WorldMap from "../WorldMap";
import {Rate,Carousel,Row, Col} from 'antd';
const star=require("../../assets/images/star.svg");
import {connect} from 'react-redux'
const data = [
  {
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },{
    index: 1,
    name: "A",
    color: "#f48fb1",
    radius: 15
  },
  {
    index: 1,
    name: "B",
    color: "#ffab91",
    radius: 34
  },
  {
    index: 2,
    name: "C",
    color: "#b87fe9",
    radius: 32
  },
  {
    index: 3,
    name: "D",
    color: "#64b5f6",
    radius: 32
  },
  {
    index: 4,
    name: "E",
    color: "#81c784",
    radius: 18
  },
  {
    index: 5,
    name: "F",
    color: "#f48fb1",
    radius: 19
  },
  {
    index: 6,
    name: "G",
    color: "#64b5f6",
    radius: 22
  }
];

class Dashbord extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  getPercentComputed(){
    const data=[
        {
          data:23,
          tag:"活跃会员"
        },
        {
          data:56.8,
          tag:"企业会员"
        },
        {
          data:17.4,
          tag:"个人会员"
        }
      ]
      return data
  }

  getStarInfo(){
    const data=[
        [207,1,101,168,19,2],
        [87,5,96,18,4,2]
      ]
      return data
  }

  componentDidMount(){}

  componentWillMount() {}

  render(){
    const DataSourceSpeacil={
      BoxStyle:{
          width: "100%",
          margin:"10px 0 0 0",
          padding: "0 0 19px 0",
      },
      leftText:"会员统计",
      showRight:false
    }

    const DataSourceTwo={
      BoxStyle:{
        width:"100%",
        height:"330px"
      },
      leftText:"会员统计",
      showRight:false
    }

    const DataSourceS={
      BoxStyle:{
        height:"330px"
      },
      leftText:"会员统计",
      showRight:false
    }

    const DataSourceThreee={
      BoxStyle:{
        flex:1,
        width:"220px",
      },
      leftText:"企业用户数",
      showRight:false
    }

    const WorldMapDates={
      style:{
        width:"100%",
        height:"100%"
      },
      data:{a:1}
    }
    const DataSourceOne={
      BoxStyle:{
        width:"100%",
        height:"330px",
        margin:"10px 0 0 0",
      },
      leftText:"会员行业",
      showRight:false,

    }
    const PupSourceOne={
      PupStyle:{
        width:"100%",
        height:"280px"
      },
      data : [
          [
            [28,20,368426844,'金融',1990],[25,58,268426844,'教育',1990],
            [20,35,668426844,'汽车交通',1990],[58,65,868426844,'房产服务',1990],
            [50,25,468426844,'医疗健康',1990],[27,100,568426844,'物联网',1990],
            [42,90,868426844,'大数据',1990],[40,5,868426844,'游戏',1990],
            [32,85,188456778,'',2015],[37,95,88456778,'',2015],
            [34,100,18456778,'',2015],[49,98,68456778,'',2015],
            [54,95,3456778,'',2015],[60,86,78456778,'',2015],
          ],
          [[0,30,23456778,'',2015],[2,100,53456778,'',2015],
            [10,90,68456778,'',2015],[20,95,188456778,'',2015],
            [70,55,58456778,'',2015],[65,75,188456778,'',2015],
            [65,40,98456778,'',2015],[60,25,18456778,'',2015],
            [56,15,18456778,'',2015],[50,5,8456778,'',2015],
            [45,25,4456778,'',2015],[50,54,2456778,'',2015],
            [19,60,4456778,'',2015],[15,35,5456778,'',2015],
            [10,36,3456778,'',2015],[30,8,2456778,'',2015],
            [20,7,18456778,'',2015],[24,6,3456778,'',2015],
            [2,56,1456778,'',2015],[34,4,14456778,'',2015],
            [3,8,113456778,'',2015],[70,0,23456778,'',1990],
            [68,8,3456778,'',2015],[67,66,3456778,'',1990],
            [65,95,1456778,'',2015],[55,45,8456778,'',2015],
            [13,75,568426844,'文化娱乐',1990],[50,75,368426844,'农业生产',1990],
            [7,23,168426844,'环保',1990],[6,65,128426844,'物流',1990],
            [14,5,668426844,'VR/AR零售',1990],[62,3,688426844,'能源',1990],
          [35,50,2112426844,'电子商务',1990],[45,55,268426844,'人工智能',1990]]
      ],
    }
    const LT1=[
      {
        left:{
          l1:"政策服务",
          datas:[34,411]
        },
        right:{
          r1:"基础服务",
          datas:[190,680000]
        }
      },
      {
        left:{
          l1:"研发服务",
          datas:[35,2380000]
        },
        right:{
          r1:"创业孵化",
          datas:[103,215000]
        }
      },
      {
        left:{
          l1:"成果转化",
          datas:[35,300000]
        },
        right:{
          r1:"上云服务",
          datas:[21,70000]
        }
      },{
        left:{
          l1:"创业集市",
          datas:[16,30000]
        },
        right:{
          r1:"科技金融",
          datas:[12000,488.8]
        }
      }
  ]
  return(
    <div className='home-container'>
        <div className='HeadPart'>
            <Row gutter={16}>
                <Col span={7}>
                    <div className='Float'>
                        <div className='boxShadow item1'>
                            <Carousel autoplay>
                                {LT1.map((val,index)=>{
                                    return <div key={index}>
                                        <div className='FO'>
                                            <div className='Left'>
                                                <div>{val.left.l1}</div>
                                                <div style={{display:"flex",color:"#00FFFF"}}>
                                                    <span><img alt="" style={{width:"20px"}} src={require('../../assets/images/l1.svg')}/></span>
                                                    <span>产品数量</span>
                                                    <span className='Number'> <AnimateComponent value={val.left.datas[0]}/> </span>
                                                </div>
                                                <div style={{display:"flex",color:"#FFFF00"}}>
                                                    <span><img alt="" style={{width:"20px"}} src={require('../../assets/images/l2.svg')}/></span>
                                                    {index==0? <span>服务次数</span> : <span>交易金额</span>}
                                                    <span className='Number'><AnimateComponent value={val.left.datas[1]}/></span>
                                                    {index==0?<span></span>:<span style={{fontSize:'10px', paddingTop:'10px', paddingLeft:'3px'}}>元</span>}
                                                </div>
                                            </div>
                                            <div className='Right' style={{margin:"0 0 0 15px"}}>
                                                <div style={{marginTop:"0"}}>{val.right.r1}</div>
                                                <div style={{display:"flex",margin:"0",color:"#00FFFF"}}>
                                                    <span><img alt="" style={{width:"20px"}} src={require('../../assets/images/l1.svg')}/></span>
                                                    <span>产品数量</span>
                                                    <span className='Number'> <AnimateComponent value={val.right.datas[0]}/></span>
                                                </div>
                                                <div style={{display:"flex",color:"#FFFF00"}}>
                                                    <span><img alt="" style={{width:"20px"}} src={require('../../assets/images/l2.svg')}/></span>
                                                    <span>交易金额</span>
                                                    <span className='Number'> <AnimateComponent value={val.right.datas[1]}/></span>
                                                    {index==3?<span style={{fontSize:'10px', paddingTop:'10px',paddingLeft:'3px'}}>亿</span>:<span style={{fontSize:'10px', paddingTop:'10px',paddingLeft:'3px'}}>元</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </Carousel>
                        </div>

                        <div className='boxShadow item2'>
                            <ul className='MainBox'>
                                <li>
                                    <div className='Items' style={{display:"flex"}}>
                                        <span>最新交易用户</span>
                                        <span>单笔交易量</span>
                                        <div style={{width:'13px', height:'13px', backgroundColor:"#39bff6", marginLeft:'50px', marginTop:'5px'}}></div> <span style={{fontSize:"15px", marginLeft:"5px"}}>正常</span>
                                        <div style={{width:'13px', height:'13px', backgroundColor:"#ffa001 ",  marginLeft:'10px', marginTop:'5px'}}></div>  <span style={{fontSize:"15px", marginLeft:"5px"}}>可疑</span>
                                        <div style={{width:'13px', height:'13px', backgroundColor:"#fb0001 ",  marginLeft:'10px', marginTop:'5px'}}></div>  <span style={{fontSize:"15px", marginLeft:"5px"}}>告警</span>
                                    </div>
                                </li>
                                <li className='Table'><span><TradTables/></span></li>
                            </ul>
                        </div>

                        <div  className='boxShadow item3'>
                            <div className='l3'>
                                <img alt="" src={require("../../assets/images/t1.svg")}  />
                                <div className='item3-box'>
                                    <div className='number'><AnimateComponent value={15}/></div>
                                    <div className='text'>区块链节点数量</div>
                                </div>
                            </div>
                            <div className='l3' style={{margin:"0 0 0 15px"}}>
                                <img alt="" src={require("../../assets/images/btc_orange.svg")}  />
                                <div  className='item3-box'>
                                    <div className='number'><AnimateComponent value={this.props.bct}/></div>
                                    <div className='text'>区块链高度</div>
                                </div>
                            </div>
                        </div>
                        <div style={{width:"100%",margin:"10px 0 0 0"}}>
                            <ContainerBox {...DataSourceTwo}  leftText="交易趋势">
                                <div className="containerA">
                                    <ZxT width={"90%"} overflow={'hidden'} height={"270px"} margin={"0 0 5px 25px"}/>
                                </div>
                            </ContainerBox>
                        </div>
                    </div>
                </Col>
                <Col span={10}>
                    <div className='Float'>
                        <div className='item4'>
                            <div style={{height:"608px"}}><WorldMap {...WorldMapDates}/></div>
                            <div  style={{overflow:'hidden'}}>
                                <ContainerBox {...DataSourceOne}>
                                    <PupleTable {...PupSourceOne}/>
                                </ContainerBox>
                            </div>
                        </div>
                    </div>
                </Col>


                <Col span={7}>
                    <div className='Float'>
                        <div className='boxShadow Four' style={{padding:"20px",height: "169px"}}>
                            <ul style={{margin:0}}>
                                <li>
                                    <div><img alt="" src={require('../../assets/images/p1.svg')}/></div>
                                    <div style={{color:"#00FEFB",display:'flex',flexWrap:'nowrap'}}>{this.props.totalMoney}<span style={{fontSize:"15px",marginTop:"20px"}}>万</span></div>
                                    <div>创新信用券</div>
                                    <div>资金额</div>
                                </li>
                                <li>
                                    <div><img alt="" src={require('../../assets/images/p2.svg')}/></div>
                                    <div style={{color:"#FF8E00"}}><AnimateComponent value={this.props.credit.amount}/></div>
                                    <div>创新信用券</div>
                                    <div>发放数量</div>
                                </li>
                                <li>
                                    <div><img alt="" src={require('../../assets/images/p3.svg')}/></div>
                                    <div style={{color:"#FDF40D"}}><AnimateComponent value={this.props.credit.used}/></div>
                                    <div>创新信用券</div>
                                    <div>使用数量</div>
                                </li>
                                <li>
                                    <div><img alt="" src={require('../../assets/images/p4.svg')}/></div>
                                    <div style={{color:"#8DFF00"}}><AnimateComponent value={this.props.credit.cashed}/></div>
                                    <div>创新信用券</div>
                                    <div>兑现数量</div>
                                </li>
                            </ul>
                        </div>

                        <div className='boxShadow FourS'>
                            <div style={{padding:"0 0 10px 5px",color: '#fff'}}>创新信用券服务商</div>
                            <ul>
                                <li>
                                    <div><AnimateComponent value={3}/></div>
                                    <div>
                                        <img alt="" src={star}/>
                                    </div>
                                </li>
                                <li>
                                    <div><AnimateComponent value={48}/></div>
                                    <div>
                                        <img alt="" src={star}/>  <img alt="" src={star}/>
                                    </div>
                                </li>
                                <li>
                                    <div><AnimateComponent value={16}/></div>
                                    <div>
                                        <img alt="" src={star}/> <img alt="" src={star}/> <img alt="" src={star}/>
                                    </div>
                                </li>
                                <li>
                                    <div><AnimateComponent value={4}/></div>
                                    <div>
                                        <img alt="" src={star}/><img alt="" src={star}/><img alt="" src={star}/><img alt="" src={star}/>
                                    </div>
                                </li>
                                <li>
                                    <div><AnimateComponent value={2}/></div>
                                    <div>
                                        <img alt="" src={star}/><img alt="" src={star}/><img alt="" src={star}/><img alt="" src={star}/><img alt="" src={star}/>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='bpNumber'>
                            <ContainerBox {...DataSourceThreee} >
                                <div  className='bpstar'>
                                    <div>
                                        {
                                            this.getStarInfo()[0].map((val,index)=>{
                                                return <div key={index} style={{padding:"0",textAlign:"center"}}>
                                                    <span className='Cnumber' style={{marginRight:"7px",fontSize:"20px",color:'#fff'}}><AnimateComponent value={val}/></span>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.getStarInfo()[0].map((val,index)=>{
                                                return <div key={index} style={{padding:"4.5px 0",}}>
                                                    <span style={{fontSize:"14px" }}></span>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.getStarInfo()[0].map((val,index)=>{
                                                return <div key={index} style={{padding:"4.5px 2px"}}>
                                                    <Star value={index} total={5} StarStyle={{width:"20px",color:"#00EAFF", marginRight:"10px",marginLeft:"4px", marginTop:"-6px"}}/>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </ContainerBox>
                            <ContainerBox {...DataSourceThreee} leftText="注册服务商">
                                <div  className='bpstar'>
                                    <div>
                                        {
                                            this.getStarInfo()[1].map((val,index)=>{
                                                return <div key={index} style={{padding:"0",textAlign:"center"}}>
                                                    <span className='Cnumber' style={{marginRight:"7px",fontSize:"20px",color:'#fff'}}><AnimateComponent value={val}/></span>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.getStarInfo()[1].map((val,index)=>{
                                                return <div key={index} style={{padding:"4.5px 0"}}>
                                                    <span style={{fontSize:"14px"}}></span>
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div>
                                        {this.getStarInfo()[1].map((val,index)=>{
                                            return (
                                                <div key={index} style={{padding:"4.5px 2px"}}>
                                                    <Star value={index} total={5} StarStyle={{width:"20px",color:"#00EAFF", marginRight:"10px",marginLeft:"4px", marginTop:"-6px"}}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </ContainerBox>
                        </div>

                        <div>
                            <ContainerBox {...DataSourceSpeacil} >
                                <div className='ca'>
                                    <div>
                                        <ul>
                                            <li>
                                                <div className='n' style={{fontSize:"40px", color:"#FFF", opacity:"1",marginTop:"-20px"}}><AnimateComponent value={18}/></div>
                                                <div className='nd' style={{fontSize:"18px", color:"#FFF", opacity:"1",marginTop:"-10px", marginBottom:"15px"}}> 当前在线</div>
                                            </li>
                                            <li>
                                                <div  className='n' style={{fontSize:"40px", color:"#FFF", opacity:"1", marginTop:"-20px"}}><AnimateComponent value={876}/></div>
                                                <div className='nd' style={{fontSize:"18px", color:"#FFF", opacity:"1", marginTop:"-10px", marginBottom:"15px"}}>会员总数</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='circle'>
                                        <ul>
                                            {this.getPercentComputed().map((val,index)=>{
                                                return (
                                                    <li key={index}>
                                                        <div>
                                                            <Progress strokeWidth={12}  className='dirProgress' strokeColor="#47D1FC" type="circle" percent={val.data} />
                                                        </div>
                                                        <div className='nd' style={{marginTop: "10px",color:'#fff'}}> {val.tag}</div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </ContainerBox>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className='FootPart'></div>
    </div>
  )
  }
}
const mapStateToProps=(state)=>({
    bct:state.dashbord.bctHeight,
    credit:state.dashbord.credit,
    totalMoney:state.dashbord.totalMoney
})

export default connect(mapStateToProps,null)(Dashbord);
