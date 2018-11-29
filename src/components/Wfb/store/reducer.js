import * as actionTypes from './actionTypes'

const defaultState={
    productInfo:{},
    transactionInfo:{
        company:[],
        productProvider:[]
    },
    declareInfo:{
        enterprise:[
            {
                star: 1,
                company: '成都高新物联网科技有限公司'
            },
            {
                star: 2,
                company: '成都香菇年文化传播有限公司'
            },
            {
                star: 3,
                company: '成都可芳文化传播有限公司'
            },
            {
                star: 1,
                company: '成都亦呈装饰工程有限公司'
            },
            {
                star: 1,
                company: '成都心成优势教育咨询有限公司'
            },
            {
                star: 1,
                company: '成都世宇通教育咨询有限公司'
            },
            {
                star: 1,
                company: '成都家好旺文化创意有限公司'
            },
            {
                star: 5,
                company: '青蝌文化创意（成都）有限公司'
            },
            {
                star: 5,
                company: '成都角儿文化传播有限公司'
            },
            {
                star: 1,
                company: '成都高新物联网科技有限公司'
            },
            {
                star: 2,
                company: '成都香菇年文化传播有限公司'
            },
            {
                star: 3,
                company: '成都可芳文化传播有限公司'
            },
            {
                star: 1,
                company: '成都亦呈装饰工程有限公司'
            },
            {
                star: 1,
                company: '成都心成优势教育咨询有限公司'
            },
            {
                star: 1,
                company: '成都世宇通教育咨询有限公司'
            },
            {
                star: 1,
                company: '成都家好旺文化创意有限公司'
            },
            {
                star: 5,
                company: '青蝌文化创意（成都）有限公司'
            },
            {
                star: 5,
                company: '成都角儿文化传播有限公司'
            },
        ]
    }
}

/*const getMenuList=(state,action)=>{
    return Object.assign({},state,{transactionInfo:action.result})
}*/
//getMenuList(state,action)

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_MENU_LIST:
            return {
                ...state,
                transactionInfo: action.result
            }
        case actionTypes.GET_PRODUCT_LIST:
            return {
                ...state,
                productInfo:action.result
            }
        case actionTypes.GET_TRADE_LIST:
            return {
                ...state,
                tradeInfo:action.result
            }
        case actionTypes.GET_FIND_DATA:
            return {
                ...state,
                dataInfo:action.result
            }
        case actionTypes.GET_DECLARE_LIST:
            return {
                ...state,
                declareInfo: action.result
            }
        case actionTypes.GET_DECLAR_ORDER:
            return {
                ...state,
                declareOrderInfo:action.result
            }
        case actionTypes.GET_DECLARE_INFO:
            return {
                ...state,
                declareDetailInfo:action.result
            }
        default:
            return state
    }
}