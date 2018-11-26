import React  from 'react';
import "./ClickHotMap.less"

export default class ClickMap extends  React.Component{
  constructor(props) {
        super(props);
        this.state = {
            translateX: 0,
            translateY: 0,
            idx:0,
            display:"none",
        };
        this.moving = false;
        window.onmousemove = e => this.onMouseMove(e);
    }

    onMouseEnter(e,idx) {
        this.moving = true;
        this.setState({idx:idx, display:""});
    }

    onMouseLeave() {
        this.moving = false;
        this.setState({display:"none"});
    }

    onMouseMove(e) {
        this.moving && this.onMove(e);
    }

    onMove(e) {
      const dx=0, dy=0;
      this.setState({ translateX: e.clientX + dx, translateY: e.clientY + dy });
    }

  getStackInfos(){
    const data=[
      [
        {
          data:3500,
          tag:"电子科大科技园（西区）"
        },
        {
          data:1003,
          tag:"成电无线众创空间（成都店）"
        },
        {
          data:4762,
          tag:"创业咖啡（成都店）"
        },
        {
          data:984,
          tag:"智汇青年（成都店）"
        },
        {
          data:984,
          tag:"顺康新科孵化园（成都店）"
        },
        {
          data:984,
          tag:"天府创业园（成都店）"
        },
        {
          data:984,
          tag:"融智创新孵化园（成都店）"
        },
        {
          data:984,
          tag:"汇都科技企业孵化器（成都店）"
        },
        {
          data:984,
          tag:"电子科技大学创业苗圃（清水河校区）"
        },
        {
          data:984,
          tag:"中电科航空电子产业园（成都店）"
        },
        {
          data:984,
          tag:"创智联邦（成都店）"
        },
        {
          data:984,
          tag:"龙湖·中央孵化园（成都店）"
        },
        {
          data:984,
          tag:"合创·汇创新创业孵化基地（成都店）"
        },
      ],
      [
        {
          data:3500,
          tag:"双创中心（起步园）"
        },
        {
          data:1003,
          tag:"府河电气孵化器（成都店）"
        },
        {
          data:4762,
          tag:"天府生命科技园（成都店）"
        },
        {
          data:984,
          tag:"数字新媒体创新孵化基地（成都店）"
        },
        {
          data:984,
          tag:"高新发展科工园加速器（成都店）"
        },
        {
          data:984,
          tag:"凯乐国际（成都店）"
        },
        {
          data:984,
          tag:"海特高新技术孵化园（成都店）"
        },
        {
          data:984,
          tag:"大一高新技术孵化器（成都店）"
        },
        {
          data:984,
          tag:"菁创创业孵化器（成都店）"
        },
      ],
      [
        {
          data:3500,
          tag:"天府新谷（成都店）"
        },
        {
          data:1003,
          tag:"天河孵化园（成都店）"
        },
        {
          data:4762,
          tag:"蓉创茶馆（成都店）"
        },
        {
          data:984,
          tag:"创客+（成都店）"
        },
        {
          data:984,
          tag:"WORK+（成都店）"
        },
        {
          data:984,
          tag:"新谷移动互联网创业苗圃（成都店）"
        },
        {
          data:984,
          tag:"执象实验室（成都店）"
        },
        {
          data:984,
          tag:"创客邦（成都店）"
        },
        {
          data:984,
          tag:"九阵智创工场（成都店）"
        },
        {
          data:984,
          tag:"金融梦工场（成都店）"
        },
        {
          data:984,
          tag:"SBC成都（成都店）"
        },
        {
          data:984,
          tag:"方糖小镇（成都店）"
        },
        {
          data:984,
          tag:"虚拟现实孵化器（成都店）"
        },
      ],
      [
        {
          data:3500,
          tag:"腾讯众创空间(天府三街店)"
        },
        {
          data:1003,
          tag:"双创中心（南区）"
        },
        {
          data:4762,
          tag:"天府软件园（成都店）"
        },
        {
          data:984,
          tag:"创业场（成都店）"
        },
        {
          data:984,
          tag:"游戏工场（成都店）"
        },
        {
          data:984,
          tag:"NEXT创业空间（成都店）"
        },
        {
          data:3500,
          tag:"侠客岛里（节能岛）"
        },
        {
          data:3500,
          tag:"爱创业科技苗圃（成都店）"
        },
        {
          data:1003,
          tag:"优聚+（成都店）"
        },
        {
          data:4762,
          tag:"优贝空间（成都店）"
        },
        {
          data:984,
          tag:"苏河汇（成都店）"
        },
        {
          data:984,
          tag:"国家西部信息安全产业园（成都店）"
        },
        {
          data:984,
          tag:"侠客岛里（菁蓉岛）"
        },
        {
          data:3500,
          tag:"创新谷（成都店）"
        },
        {
          data:3500,
          tag:"硅谷国际孵化器（成都店）"
        },
        {
          data:3500,
          tag:"中韩互联网+新技术孵化器（成都店）"
        },
        {
          data:3500,
          tag:"迈普创业孵化平台（成都店）"
        },
        {
          data:3500,
          tag:"第五维国际孵化器（成都店）"
        },
        {
          data:3500,
          tag:"长虹科技大厦（成都店）"
        },
        {
          data:3500,
          tag:"芯通科技大厦（成都店）"
        },
        {
          data:3500,
          tag:"腾讯科技大厦（成都店）"
        },
        {
          data:3500,
          tag:"腾讯西部创新中心（成都店）"
        },
        {
          data:3500,
          tag:"成都航天科创中心（成都店）"
        },
        {
          data:3500,
          tag:"摩根之星孵化器（成都店）"
        },
        {
          data:3500,
          tag:"if成都中心（成都店）"
        },
        {
          data:3500,
          tag:"优客工场(成都银泰社区店)"
        },
        {
          data:3500,
          tag:"太库成都（成都店）"
        },
        {
          data:3500,
          tag:"百曜云创（成都店）"
        },
        {
          data:3500,
          tag:"亚马逊AWS合作创业孵化器（成都店）"
        },
        {
          data:3500,
          tag:"创翼天地（成都店）"
        },
        {
          data:3500,
          tag:"成创·高新孵化园（成都店）"
        },
        {
          data:3500,
          tag:"3W空间（成都店）"
        },
        {
          data:3500,
          tag:"芯空间（成都店）"
        },
        {
          data:3500,
          tag:"中科招商云投汇（成都店）"
        },
        {
          data:3500,
          tag:"游戏汇（成都店）"
        },
        {
          data:3500,
          tag:"中关村成都创业中心（成都店）"
        },
        {
          data:3500,
          tag:"中科创客港（成都店）"
        },
        {
          data:3500,
          tag:"艾格拉斯（成都店）"
        },
        {
          data:3500,
          tag:"微风加速器（成都店）"
        },
        {
          data:3500,
          tag:"小样青年社区（成都店）"
        },
        {
          data:3500,
          tag:"ILab新材料孵化器（成都店）"
        },
        {
          data:3500,
          tag:"星河明信国际创客空间"
        },
        {
          data:3500,
          tag:"酷狗音乐孵化基地（成都站）"
        },
        {
          data:3500,
          tag:"F1创享空间（成都店）"
        },
        {
          data:3500,
          tag:"光谷咖啡（成都店）"
        },
        {
          data:3500,
          tag:"SKFI中韩未来孵化器（成都店）"
        },
        {
          data:3500,
          tag:"墨比众创空间（菁蓉国际广场店）"
        },
        {
          data:3500,
          tag:"墨比众创空间（天府软件园店）"
        },
        {
          data:3500,
          tag:"亚台青（成都）海峡青年创业园"
        },
        {
          data:3500,
          tag:"咪咕音乐孵化器（成都店）"
        },
        {
          data:3500,
          tag:"弘科启迪（成都店）"
        },
        {
          data:3500,
          tag:"赛伯乐绿科云城（成都店）"
        },
        {
          data:3500,
          tag:"科愿孵化器（成都店）"
        },
      ],
    ]
    return data[this.state.idx];
  }
  static defaultProps={
    style:{
      width:"100%",
      height:"100%",

    },

  }

  hello=()=>{
    alert("hello ")
  }
  render(){
    let {state} = this.props;
    return(

          <div id="mainMap" style={{width:"100%",height:"100%",overflow:"hidden",minWidth:"925px",maxWidth:'925px'}} className='hotmap' >

              <img src={require("../assets/images/map-fh.svg")} style={{width:"100%",height:"100%"}} useMap="#fh"/>


              <map name="fh">
                <area shape="circle" coords="248,127,30" alt="Mercury" href="/#/innovation" onMouseEnter={e=>this.onMouseEnter(e,0)} onMouseLeave={e=>this.onMouseLeave(e)} onMouseMove={e=>this.onMouseMove(e)}/>
                <area shape="circle" coords="357,456,30" alt="Mercury" href="/#/innovation" onMouseEnter={e=>this.onMouseEnter(e,1)} onMouseLeave={e=>this.onMouseLeave(e)} onMouseMove={e=>this.onMouseMove(e)}/>
                <area shape="circle" coords="397,506,30" alt="Mercury" href="/#/innovation" onMouseEnter={e=>this.onMouseEnter(e,2)} onMouseLeave={e=>this.onMouseLeave(e)} onMouseMove={e=>this.onMouseMove(e)}/>
                <area shape="circle" coords="436,574,30" alt="Mercury" href="/#/innovation" onMouseEnter={e=>this.onMouseEnter(e,3)} onMouseLeave={e=>this.onMouseLeave(e)} onMouseMove={e=>this.onMouseMove(e)}/>
              </map>
              <div className='content1'>
                <div><span>孵化器数量：</span><span>56</span></div>
                <div><span>企业孵化数量：</span><span>103</span></div>
              </div>
              <div className='content2'>
                <div><span>孵化器数量：</span><span>56</span></div>
                <div><span>企业孵化数量：</span><span>103</span></div>
              </div>
              <div className='content3'>
                <div><span>孵化器数量：</span><span>56</span></div>
                <div><span>企业孵化数量：</span><span>103</span></div>
              </div>
              <div className='content4'>
                <div><span>孵化器数量：</span><span>56</span></div>
                <div><span>企业孵化数量：</span><span>103</span></div>
              </div>

              <div className='info' style={{transform: `translateX(${this.state.translateX}px)translateY(${this.state.translateY}px)`, display:this.state.display}}>
                <div></div>
                <div>
                  <div className='container'>
                    <div>
                      <div style={{color:"#FFF600", fontSize:"18px",paddingBottom:"5px"}}>孵化器</div>
                      <ul style={{marginTop:"-5px"}}>
                        {this.getStackInfos().map((val,index)=>{
                          return <li key={index}>
                                    <div style={{color:"#FFF"}}>{val.tag}</div>
                                </li>
                        })}
                        </ul>
                    </div>
                    <div>
                      <div style={{color:"#FFF600", fontSize:"18px",paddingBottom:"5px"}}>企业数量</div>
                      <ul style={{marginTop:"-5px"}}>
                        {this.getStackInfos().map((val,index)=>{
                          return <li key={index}>
                                    <div style={{color:"#FFF"}}>{val.data}</div>
                                </li>
                        })}
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>


    )
  }
}
