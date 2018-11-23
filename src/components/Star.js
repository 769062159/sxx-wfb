import React from 'react';

export default class Star extends React.Component {
  constructor(props) {
    super(props)
  }
  static defaultProps={
    StarStyle:{
      width:"20px",
      margin:"0 10px 0 10px"
    },
    arr:[2947,4610,1382,2592,2113],
    value:3,
    total:5
  }
  render(){
    let {StarStyle,value,total,arr}=this.props;
    return(
      <span>
          {
              arr.map((ele,index)=>{
                  return(
                      <span key={index} style={{width:'30px',float:'left',height:'30px'}}>
                          {index>=value?<img src={require('../assets/images/emptystar.svg')} style={StarStyle}/>:<img src={require('../assets/images/fullstar.svg')} style={StarStyle}/>}
                      </span>
                  )
              })
          }
      </span>
    )

  }
}
