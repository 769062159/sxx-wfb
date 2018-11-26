import React,{Component,Fragment} from 'react'

const defaultStyle={
    position: 'fixed',
    backgroundColor: '#fff',
    top: '50%',
    left: '50%',
    zIndex: '1001'
}
const screen={
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3',
    overflow: 'hidden',
    width: '100%',
    height: 'calc(100vh)',
    zIndex: 1000
}

const iconSvg={
    position: 'absolute',
    top: '20px',
    right: '20px',
    fill:'#ccc',
    display: 'block',
    width: '20px',
    height: '20px',
    cursor: 'pointer'
}
export default class Popup extends Component{
    constructor(props) {
        super(props)
        this.state={
            status:false
        }
    }

    handleOpenPopup=()=>{
        this.setState({status:true})
    }

    handleClosePopup=()=>{
        this.setState({status:false})
    }

    render(){
        let {status}=this.state
        let newStyle=Object.assign({},defaultStyle,this.props.style)
        return (
            <Fragment>
                {status?
                    <div>
                        <div style={screen} onClick={()=>this.handleClosePopup()}></div>
                        <div className={this.props.className} style={newStyle}>
                            <svg className='icon-svg' style={iconSvg} onClick={()=>this.handleClosePopup()}>
                                <use xlinkHref='#icon-quxiao1'></use>
                            </svg>
                            {this.props.children}
                        </div>
                    </div>
                :null}
            </Fragment>
        )
    }
}