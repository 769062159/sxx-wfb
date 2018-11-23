import React  from 'react';

import echarts from 'echarts';

export default class PupleTable extends  React.Component{
componentDidMount(){
var myChart = echarts.init(document.getElementById('PupleTable'));
var data = this.props.data;
var option = {

    xAxis: {

        axisTick:{
                show:false
            },
        show:false,
     splitLine: {
            show: false
        },
        axisLabel : {
          // interval:3,


              textStyle: {
                fontFamily: "PingFangSC-Regular",
                  opacity:0.4,
                  color: '#FFFFFF'
              }
          },
    },
    yAxis: {
        show:false,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },

        scale: true
    },
    series: [{
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,

            },
            normal: {
                position: '',
                formatter: function (param) {
                    return param.data[3];
                },
                show: true,
                color: '#FFFFFF',
                textStyle:this.props.redStyle,
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,

                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
            },
            normal: {
                position: '',
                formatter: function (param) {
                    return param.data[3];
                },
                show: true,
                color: '#FFFFFF',
                textStyle:this.props.blueStyle,
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};
myChart.setOption(option)

}
static defaultProps={
  PupStyle:{
    width:"100%",
    height:"350px"
  }
}
render(){
  let {PupStyle}=this.props;

return(

      <div id="PupleTable" style={PupStyle}></div>

)
}
}
