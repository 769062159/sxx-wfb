import React,{Component,Fragment} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Header from '../common/header'
import Footer from '../common/footer'
import TabBar from '../common/header/TabBar';
import Home from '../components/innovation'
import Dashbord from '../components/Dashbord'
import Wfb from '../components/Wfb'
export default ()=>(
    <div>
        <TabBar />
        <Switch>
            <Route path='/' exact component={()=>(<Redirect to='/datas'/>)}></Route>
            <Route path='/datas' component={ Dashbord }></Route>
            <Route path='/wfb' component={ Wfb }></Route>
            <Route path='/innovation' component={Home}></Route>
        </Switch>
        {/*<Footer />*/}
    </div>
)