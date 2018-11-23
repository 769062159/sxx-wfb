import React  from 'react';
import echarts from 'echarts';
let TableDatas={
  name:[ '联合信用征信','精为企业管理','联合网络通信','北京直真科技','四川环泰'],
  data:[195000, 3600, 24000, 1000, 499],
  dub:[1,1,1,1,1]
}
let totalDatas={
  name:[
    '联合信用征信','精为企业管理','联合网络通信','北京直真科技','四川环泰',
    '成都天象','技术转移中心','成都维品科技','四川汇海立方','成都泰聚泰',
    '痛客企业服务','琴台律师事务所','博远堂广告','成都实唯物联网','高扬律师事务所',
    '川悦文化传媒'
  ],
  data:[
    195000, 3600, 24000, 1000, 499,
    888, 15000, 25000, 4000, 100000,
    30000, 35000, 50000, 100000, 5000,
    5000
  ],
  dub:[
    1,1,1,1,1,
    1,1,1,1,1,
    1,1,1,1,1,
    1
  ]
}
let normalcolor = '#39bff6' ;
let dubcolor = "#ffa001";
let warncolor = "#fb0001";
function cal(){
  var res = [];
  for(let i=0; i<TableDatas.data.length; i++){
    let c=normalcolor;
    if(TableDatas.dub[i]==1){
      c=normalcolor;
    }else if(TableDatas.dub[i]==2){
      c=dubcolor;
    }else {
      c=warncolor;
    }
    res.push({name:TableDatas.name[i], value:TableDatas.data[i], itemStyle:{color:c}});
  }
  return res;
}
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '2%',
        right: '15%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
            show: false
        },
        splitNumber:3,
        show:false
    },
    yAxis: {
        splitNumber:1,

        interval:0,
           type: 'category',
           axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
            axisLabel : {
                margin:40,
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 17,
                }
            },
        data:  TableDatas.name
    },
    series: [
        {
            type: 'bar',
            color:"#3dc4fa",
            itemStyle:{
                normal:{

                    label:{
                        show:true,
                        position: 'right',
                        color: '#FFF',
                        textStyle:{
                          fontSize: 17,
                        }
                    }
                }
            },
            barWidth:15,
            data: cal(),
            dimensions: [
              {type: 'number'},
            ]
        },
    ]
};


export default class TablesChart extends  React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('tables'));
    myChart.setOption(option)
      let counter=5;

     setInterval(function(){
       TableDatas.name.shift();
       TableDatas.data.shift();
       TableDatas.dub.shift();
       ++counter;
       counter = (counter+totalDatas.data.length)%totalDatas.data.length;
       TableDatas.data.push(totalDatas.data[counter])
       TableDatas.name.push(totalDatas.name[counter])
       TableDatas.dub.push(totalDatas.dub[counter])
         myChart.setOption({
             yAxis:{
                 data:TableDatas.name
             },
             series:[{
                 name:'成交',
                 data:cal()
             }]
         });
     },3000)
  }
  render(){
    return(
       <div id="tables" className='tables' style={{height: '275px',marginTop:'-40px'}}></div>
    )
  }
}
