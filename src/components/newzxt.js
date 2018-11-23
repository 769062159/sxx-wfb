
import React  from 'react';
import echarts from 'echarts';
import "./zxt.less";


export default class TablesChart extends  React.Component{
  componentDidMount(){
    var data = [["09-24",1],["09-25",3],["09-26",2],["09-27",3],["09-28",2],["09-29",2],["09-30",1]];

    var dateList = data.map(function (item) {
      return item[0];
    });
    var valueList = data.map(function (item) {
      return item[1];
    });

    var option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [{
        data: dateList,
        splitLine: {
          show: false
        },
        axisTick:{
          show:true
        },
        axisLine:{
          lineStyle:{
            opacity: 1,
            color:"#FFFFFF"
          }
        },
      }],
      yAxis: [{
        show: false,
        splitLine: {show: false}
      }],
      grid: {
        bottom: '10%',
        top:'15%',
        left:'1%',
        right:'1%'
      },
      series: [{
        type: 'line',
        data: valueList,
        itemStyle:{
          normal:{
            color:"#22A5F7",
          }
        },
        showSymbol: true,
        symbolSize: 1,
        label:{
          normal:{
            show: true,
            position: 'top',
            textStyle:{
              fontSize:15,
              color:"#FFF",
            }
          }
        },
      }]
    };

    const chart = echarts.init(document.getElementById("zxt"));
    chart.setOption(option);
  }
  render(){
    return(
      <div id="zxt" style={{...this.props}} className='zxt'></div>
    )
  }
}
