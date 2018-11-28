import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as Api from '../../../api'
const getLeftList=(result)=>({
    type: actionTypes.GET_MENU_LIST,
    result
})

export const getCompanyInfoList=()=>{
    return (dispatch)=>{
        axios.get(Api.GET_FIND_ALL).then(res=>{
            if(res.data.success){
                console.log(getLeftList(res.data.companyAndProviderVo))
                dispatch(getLeftList(res.data.companyAndProviderVo))
            }
        }).catch(err=>{
            console.log(err)
            dispatch(getLeftList({}))
        })
    }
}