let env = process.env.NODE_ENV

const HOST = env === 'production'?  'http://47.106.32.7:31000':'http://47.106.32.7:31000'
// http://192.168.0.101:31000

//微腐败交易信息接口
//显示公司和服务商列表
export const GET_FIND_ALL = HOST+'/product/findAll'
//展示订单信息
export const GET_FIND_PRODUCT = HOST+'/product/productInformation'
//展示交易信息
export const GET_FIND_TRADE = HOST+'/product/findTrandeInformationList'
//展示统计信息
export const GET_FIND_DATA = HOST+'/product/findTransactionDataList'

//展示申报信息
export const GET_DECLARE_LIST=HOST+'/product/findCorporateCenterList'
//展示申报订单
export const GET_DECLAR_ORDER=HOST+'/product/findCompanyInfo'
//展示申报详情
export const GET_DECLARE_INFO=HOST+'/product/showConpanyInfoList'