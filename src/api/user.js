import { getAction } from '../utils/requst'

const getBaiduData = (params) =>
  getAction('http://mrack.cn:777/geektime/recommend', params)

export { getBaiduData }
