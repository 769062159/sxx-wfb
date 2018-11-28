let env = process.env.NODE_ENV

const HOST = env === 'production'? 'http://47.106.32.7:31000' : 'http://192.168.0.101:31000'

//微腐败交易信息接口
//显示公司和服务商列表
export const GET_FIND_ALL = HOST+'/product/findAll'
//展示订单信息
export const GET_FIND_PRODUCT = HOST+'/product/productInformation'
//展示交易信息
export const GET_FIND_TRAND = HOST+'/product/findTrandeInformationList'