import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as Api from '../../../api'
const getLeftList=(result)=>({
    type: actionTypes.GET_MENU_LIST,
    result
})

const getProductList=(result)=>({
    type: actionTypes.GET_PRODUCT_LIST,
    result
})

/*
export const getTransactionList=(options)=>{
    return (dispatch)=>{
        axios.get(Api.GET_FIND_PRODUCT+`?companyID=${options}`).then(res=>{
            if(res.data.success){
                dispatch(getProductList(res.companyAndProviderVo))
            }
        }).catch(err=>{
            console.log(err)
        })
    }
}
*/

/*
export const getCompanyInfoList=()=>{
    return (dispatch)=>{
        axios.get(Api.GET_FIND_ALL).then(res=>{
            if(res.data.success){
                dispatch(getLeftList(res.data.companyAndProviderVo))
            }
        }).catch(err=>{
            console.log(err)
            dispatch(getLeftList({}))
        })
    }
}*/
