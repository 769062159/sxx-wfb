import { Modal, Button } from 'antd';
import React from 'react';
import styles from './Interaction.less';
import AnimateComponent from '../components/AnimateComponent';
import { connect } from 'react-redux';
class Interaction extends React.Component {
  constructor(props) {
       super(props);
       this.state={
         handVisible: false,
         ticketVisible: false,
         percent: 0,
         money: 10000,
       }
   }



  setHandVisible(handVisible) {
    this.setState({ handVisible });
  }

  setTicketVisible(ticketVisible) {
    this.setState({ ticketVisible });
  }

  increase = () => {
        const percent = this.state.percent;
        const targetPercent = 1;
        const speed = (targetPercent - percent) / 4000;
        let start = null;
        const animate = timestamp => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            let currentProgress = speed * progress;
            if(currentProgress>targetPercent){
              currentProgress = 0;
              start = timestamp;
            }

            this.setState({
                percent: currentProgress
            });
            if (currentProgress < targetPercent) {
                window.requestAnimationFrame(animate);
            }
        };
        window.requestAnimationFrame(animate);
    }



  render() {
    return (
      <div>
        <li onClick={() => this.setHandVisible(true)}>互动活动</li>
        <Modal
          title={null}
          centered
          visible={this.state.handVisible}
          onCancel={() => this.setHandVisible(false)}
          footer={null}
          closable={false}
          width={'1000px'}
          wrapClassName={'hand'}
          style={{height:'1000px'}}
          className={styles.hand}
       >

          <div onClick={()=>{this.setHandVisible(false);this.setTicketVisible(true);}} >
            <img src={require('../assets/images/pushhand.png')}  style={{padding:"300px 380px", opacity:`${this.state.percent}`}} onLoad={this.increase}/>
          </div>
        </Modal>
        <br /><br />

        <Modal
          title={null}
          centered
          footer={null}
          closable={false}
          className={styles.money}
          visible={this.state.ticketVisible}
          onOk={() => this.setTicketVisible(false)}
          onCancel={() => {this.setTicketVisible(false);this.props.dispatch({type: 'totalMoney/add', payload: this.state.money})}}
          width={'1000px'}
        >
          <div style={{textAlign: "center"}}>
            <div><img alt="" src={require('../assets/images/p1.svg')}/></div>
            <div style={{color:"#00FEFB"}}><AnimateComponent value={this.state.money} duration={5000}/></div>
            <div>创新信用券奖金池</div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
    totalMoney:state
})
export default connect(mapStateToProps,null)(Interaction);
