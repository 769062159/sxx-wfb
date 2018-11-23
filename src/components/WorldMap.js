import React  from 'react';
import echarts from 'echarts';

import styles from './WorldMap.less';
require('echarts/dist/extension/bmap.js');
require('echarts/map/js/china.js');

export default class WorldMap extends  React.Component{

  static defaultProps={
    style:{
      width:"100%",
      height:"100%"
    }

  }
  componentDidMount(){
    return false;
    var myChart = echarts.init(document.getElementById('mainMap'));
//所有的地理位置经纬度
//数据地图删掉

//区块链监管后台
let orginData=[{"name":"天府软件园信息服务店","value":"[104.0775280000,30.5526340000]","symbolSize":10,"color":"#F58158","id":1},{"name":"天府新谷创业社区店","value":"[104.0622670000,30.5929200000]","symbolSize":10,"color":"#C0C0C0","id":2},{"name":"盈创动力科技金融店","value":"[104.0684440000,30.5812090000]","symbolSize":10,"color":"#C0C0C0","id":3},{"name":"移动互联创业大厦","value":"[104.0625510000,30.5448890000]","symbolSize":10,"color":"#58B3CC","id":4},{"name":"创客三区融合店","value":"[104.0677040000,30.5978030000]","symbolSize":10,"color":"#C0C0C0","id":5},{"name":"电子科技大学","value":"[103.9374040000,30.7560350000]","symbolSize":10,"color":"#58B3CC","id":6},{"name":"天府生命科技园医药研发服务店","value":"[104.0384000000,30.6209810000]","symbolSize":10,"color":"#C0C0C0","id":7},{"name":"腾讯西部创新创业中心","value":"[104.0677410000,30.5520360000]","symbolSize":10,"color":"#C0C0C0","id":8},{"name":"成电无线通信双创店","value":"[103.9091930000,30.7669960000]","symbolSize":10,"color":"#C0C0C0","id":10}];
let blockChain=new Object();
orginData.map((v)=>{
  const {name,value}=v;
  blockChain[name]=value
})

var geoCoordMap = {
  '上海': [121.4648,31.2891],
  '东莞': [113.8953,22.901],
  '东营': [118.7073,37.5513],
  '中山': [113.4229,22.478],
  '临汾': [111.4783,36.1615],
  '临沂': [118.3118,35.2936],
  '丹东': [124.541,40.4242],
  '丽水': [119.5642,28.1854],
  '乌鲁木齐': [87.9236,43.5883],
  '佛山': [112.8955,23.1097],
  '保定': [115.0488,39.0948],
  '兰州': [103.5901,36.3043],
  '包头': [110.3467,41.4899],
  '北京': [116.4551,40.2539],
  '北海': [109.314,21.6211],
  '南京': [118.8062,31.9208],
  '南宁': [108.479,23.1152],
  '南昌': [116.0046,28.6633],
  '南通': [121.1023,32.1625],
  '厦门': [118.1689,24.6478],
  '台州': [121.1353,28.6688],
  '合肥': [117.29,32.0581],
  '呼和浩特': [111.4124,40.4901],
  '咸阳': [108.4131,34.8706],
  '哈尔滨': [127.9688,45.368],
  '唐山': [118.4766,39.6826],
  '嘉兴': [120.9155,30.6354],
  '大同': [113.7854,39.8035],
  '大连': [122.2229,39.4409],
  '天津': [117.4219,39.4189],
  '太原': [112.3352,37.9413],
  '威海': [121.9482,37.1393],
  '宁波': [121.5967,29.6466],
  '宝鸡': [107.1826,34.3433],
  '宿迁': [118.5535,33.7775],
  '常州': [119.4543,31.5582],
  '广州': [113.5107,23.2196],
  '廊坊': [116.521,39.0509],
  '延安': [109.1052,36.4252],
  '张家口': [115.1477,40.8527],
  '徐州': [117.5208,34.3268],
  '德州': [116.6858,37.2107],
  '惠州': [114.6204,23.1647],
  '成都': [103.9526,30.7617],
  '扬州': [119.4653,32.8162],
  '承德': [117.5757,41.4075],
  '拉萨': [91.1865,30.1465],
  '无锡': [120.3442,31.5527],
  '日照': [119.2786,35.5023],
  '昆明': [102.9199,25.4663],
  '杭州': [119.5313,29.8773],
  '枣庄': [117.323,34.8926],
  '柳州': [109.3799,24.9774],
  '株洲': [113.5327,27.0319],
  '武汉': [114.3896,30.6628],
  '汕头': [117.1692,23.3405],
  '江门': [112.6318,22.1484],
  '沈阳': [123.1238,42.1216],
  '沧州': [116.8286,38.2104],
  '河源': [114.917,23.9722],
  '泉州': [118.3228,25.1147],
  '泰安': [117.0264,36.0516],
  '泰州': [120.0586,32.5525],
  '济南': [117.1582,36.8701],
  '济宁': [116.8286,35.3375],
  '海口': [110.3893,19.8516],
  '淄博': [118.0371,36.6064],
  '淮安': [118.927,33.4039],
  '深圳': [114.5435,22.5439],
  '清远': [112.9175,24.3292],
  '温州': [120.498,27.8119],
  '渭南': [109.7864,35.0299],
  '湖州': [119.8608,30.7782],
  '湘潭': [112.5439,27.7075],
  '滨州': [117.8174,37.4963],
  '潍坊': [119.0918,36.524],
  '烟台': [120.7397,37.5128],
  '玉溪': [101.9312,23.8898],
  '珠海': [113.7305,22.1155],
  '盐城': [120.2234,33.5577],
  '盘锦': [121.9482,41.0449],
  '石家庄': [114.4995,38.1006],
  '福州': [119.4543,25.9222],
  '秦皇岛': [119.2126,40.0232],
  '绍兴': [120.564,29.7565],
  '聊城': [115.9167,36.4032],
  '肇庆': [112.1265,23.5822],
  '舟山': [122.2559,30.2234],
  '苏州': [120.6519,31.3989],
  '莱芜': [117.6526,36.2714],
  '菏泽': [115.6201,35.2057],
  '营口': [122.4316,40.4297],
  '葫芦岛': [120.1575,40.578],
  '衡水': [115.8838,37.7161],
  '衢州': [118.6853,28.8666],
  '西宁': [101.4038,36.8207],
  '西安': [109.1162,34.2004],
  '贵阳': [106.6992,26.7682],
  '连云港': [119.1248,34.552],
  '邢台': [114.8071,37.2821],
  '邯郸': [114.4775,36.535],
  '郑州': [113.4668,34.6234],
  '鄂尔多斯': [108.9734,39.2487],
  '重庆': [107.7539,30.1904],
  '金华': [120.0037,29.1028],
  '铜川': [109.0393,35.1947],
  '银川': [106.3586,38.1775],
  '镇江': [119.4763,31.9702],
  '长春': [125.8154,44.2584],
  '长沙': [113.0823,28.2568],
  '长治': [112.8625,36.4746],
  '阳泉': [113.4778,38.0951],
  '青岛': [120.4651,36.3373],
  '韶关': [113.7964,24.7028]
};

var BJData = [
  [{name:'北京'}, {name:'上海',value:95}]
];

var SHData = [
  [{name:'上海'},{name:'包头',value:95}]
];

var GZData = [
  [{name:'广州'},{name:'福州',value:95}]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (currentName) {
  //  '东莞': [113.8953,22.901],
      var res = [];

      var fromCoord = JSON.parse(blockChain[currentName]);
  for (var i = 0; i < orginData.length; i++) {
      var dataItem = orginData[i];
      var toCoord = JSON.parse(blockChain[dataItem.name]);
      if (fromCoord && toCoord) {
          res.push({
              fromName:currentName,
              toName: dataItem.name,
              coords: [fromCoord, toCoord]
          });
      }
  }

  return res;

};

var color = ['#ffffff', '#ffffff', '#ffffff'];
var series = [];

//[['北京', BJData], ['上海', SHData], ['广州', GZData]]
orginData.map(function (item, i) {

  series.push(
    {
        // 白色航线特效图
        type: 'lines',
        zlevel: 1,                    // 用于分层，z-index的效果
        effect: { //轨迹线
            show: true,               // 动效是否显示
            period: 6,                // 特效动画时间
            trailLength: 0.7,         // 特效尾迹的长度
            color: '#fff',            // 特效颜色
            symbolSize: 3             // 特效大小
        },
        lineStyle: {
            normal: {                 // 正常情况下的线条样式
                color: color[0],
                width: 0,             // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2       // 线条曲度
            }
        },
        data: convertData(item['name'])    // 特效的起始、终点位置
    },
      {
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
             // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                color: color[0],
                width: 1,
                opacity: 0.6,
                curveness: -0.2
            }
        },
        data: convertData(item['name'])
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',       // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'        // 波纹绘制效果
        },
        label: {
            normal: {                  // 默认的文本标签显示样式
                show: true,
                position: 'right',      // 标签显示的位置
                formatter: '{b}'       // 标签内容格式器
            }
        },
        itemStyle: {
            normal: {
                color: color[0]
            }
        },

          //  [{name:'上海'},{name:'包头',value:95}] =>dataItem
          data: orginData.map(function (dataItem) {
              return {
                  name: dataItem.name,//终点名字
                  value:JSON.parse(dataItem.value).concat(55) // =>[lat,long,speed]
              };

          })
      });
});

const option = {

  title : {

      left: 'center',
      textStyle : {
          color: '#fff'
      }
  },
  tooltip : {
      trigger: 'item'
  },
  geo: {
    silent:true,
      map: 'world',       // 与引用进来的地图js名字一致
      roam: false,        // 禁止缩放平移
      itemStyle: {        // 每个区域的样式
          normal: {
              areaColor: 'rgba(0,0,0,0)',
              borderColor:"#22A5F7"
          },
          emphasis: {
              areaColor: '#2a333d'
          }
      },
      regions: [{        // 选中的区域
          name: '',
          selected: true,
          itemStyle: {   // 高亮时候的样式
              emphasis: {
                  areaColor: 'rgba(0,0,0,0)'
              }
          },
          label: {    // 高亮的时候不显示标签
              emphasis: {
                  show: true
              }
          }
      }]
  },

  bmap: {
      center: [104.07, 30.67],
      zoom: 12,
      roam: true,
      mapStyle: {

                styleJson: [
   {
             'featureType': 'land',     //调整土地颜色
             'elementType': 'geometry',
             'stylers': {
                       'color': '#081734'
             }
   },
   {
             'featureType': 'building',   //调整建筑物颜色
             'elementType': 'geometry',
             'stylers': {
                       'color': '#04406F'
             }
   },
      {
                 'featureType': 'building',   //调整建筑物标签是否可视
                 'elementType': 'labels',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'highway',     //调整高速道路颜色
                 'elementType': 'geometry',
                 'stylers': {
                 'color': '#015B99'
                 }
       },
       {
                 'featureType': 'highway',    //调整高速名字是否可视
                 'elementType': 'labels',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'arterial',   //调整一些干道颜色
                 'elementType': 'geometry',
                 'stylers': {
                 'color':'#003051'
                 }
       },
       {
                 'featureType': 'arterial',
                 'elementType': 'labels',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'green',
                 'elementType': 'geometry',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'water',
                 'elementType': 'geometry',
                 'stylers': {
                           'color': '#044161'
                 }
       },
       {
                 'featureType': 'subway',    //调整地铁颜色
                 'elementType': 'geometry.stroke',
                 'stylers': {
                 'color': '#003051'
                 }
       },
       {
                 'featureType': 'subway',
                 'elementType': 'labels',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'railway',
                 'elementType': 'geometry',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'railway',
                 'elementType': 'labels',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'all',     //调整所有的标签的边缘颜色
                 'elementType': 'labels.text.stroke',
                 'stylers': {
                           'color': '#313131',
                            'visibility': 'off'
                 }
       },
       {
                 'featureType': 'all',     //调整所有标签的填充颜色
                 'elementType': 'labels.text.fill',
                 'stylers': {
                           'color': '#FFFFFF',
                            'visibility': 'off'
                 }
       },
       {
                 'featureType': 'manmade',
                 'elementType': 'geometry',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'manmade',
                 'elementType': 'labels',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'local',
                 'elementType': 'geometry',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'local',
                 'elementType': 'labels',
                 'stylers': {
                 'visibility': 'off'
                 }
       },
       {
                 'featureType': 'subway',
                 'elementType': 'geometry',
                 'stylers': {
                           'lightness': -65
                 }
       },
       {
                 'featureType': 'railway',
                 'elementType': 'all',
                 'stylers': {
                           'lightness': -40
                 }
       },
       {
                 'featureType': 'boundary',
                 'elementType': 'geometry',
                 'stylers': {
                           'color': '#8b8787',
                           'weight': '1',
                           'lightness': -29
                 }},
                 {
                                    featureType: "poi",
                                    elementType: "all",
                                    stylers: {
                                        visibility: "off"
                                    }
                                }, {
                                    featureType: "all",
                                    elementType: "labels.icon",
                                    stylers: {
                                        visibility: "off"
                                    }
                                }, {
                                    featureType: "poilabel",
                                    elementType: "labels.text.fill",
                                    stylers: {
                                        color: "#2da0c6",
                                        visibility: "off"
                                    }
                                }
       ]
     }
  },


  series: series
};




myChart.setOption(option);

  }
  render(){
    return(

          <div id="mainMap" className={styles.mainMap} style={{width:"100%",height:"100%",overflow:"hidden",  border:" 1px solid #22a5f7"}}>
              <img src={require("../assets/images/map.svg")} style={{width:"100%",height:"100%"}}/>
          </div>

    )
  }
}
