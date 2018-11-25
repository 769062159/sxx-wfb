import {combineReducers} from 'redux'
import {reducer as homeReducer} from '../components/innovation/store'
import {reducer as dashbordReducer} from '../components/Dashbord/store'
import {reducer as wfbReducer} from '../components/Wfb/store'
const reducer = combineReducers({
    home: homeReducer,
    dashbord: dashbordReducer,
    wfb: wfbReducer
})

export default reducer