import * as actionTypes from './actionTypes'

const defaultState={
    bctHeight: 379792,
    credit:{
        found:200,
        amount:669,
        used:629,
        cashed:629
    },
    totalMoney:203
}

const getmenulist=(state,action)=>{
    return Object.assign({},state,{bctHeight:action.result})
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_MENU_LIST:
            return getmenulist(state,action)
        default:
            return state
    }
}