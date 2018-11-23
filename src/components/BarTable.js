import React  from 'react';
import echarts from 'echarts';

export default class BarTable extends  React.Component{
componentDidMount(){
const myChart = echarts.init(document.getElementById('BarTable'));
let xdata = this.props.xdata, ydata=this.props.ydata;
const option = {
    xAxis: {
        type: 'category',
        data: xdata,
        splitLine: {
               show: false
        },
        axisTick:{
                show:false
        },
        axisLabel:{
          show: true,
          textStyle: {
            color:"#FFF",
            fontSize: 15,
          }
        },
        axisLine:{
          lineStyle:{
            color:"#22a5f7",
          }
        }
    },
    yAxis: [{
        type: 'value',
        splitLine: {
               show: false
        },
        show:false,
    }],
    series: [{
        data: ydata,
        type: 'bar',
        barGap:'80%',/*多个并排柱子设置柱子之间的间距*/
  	    barCategoryGap:'70%',/*多个并排柱子设置柱子之间的间距*/
        itemStyle:{
          normal:{
            color:"#22a5f7",

          }
        },
        label:{
          normal:{
            color:"#FFF",
            position:"top",
            show: true,
            textStyle:{
              fontSize:"15",
            }
          }
        }
    }]
};
myChart.setOption(option)

}
static defaultProps={
  BarStyle:{
    width:"100%",
    height:"260px"
  }
}
render(){
  let {BarStyle}=this.props;
  return(<div id="BarTable" style={BarStyle}></div>)
  }
}
