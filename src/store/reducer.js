import {combineReducers} from 'redux'
import {reducer as homeReducer} from '../components/innovation/store'
import {reducer as dashbordReducer} from '../components/Dashbord/store'
const reducer = combineReducers({
    home: homeReducer,
    dashbord: dashbordReducer
})

export default reducer