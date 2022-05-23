import { request } from './vueAxios'
// get
const getAction = (url, params) => {
  return request({
    url,
    method: 'get',
    params
  })
}
// post
const postAction = (url, params) => {
  return request({
    url,
    method: 'post',
    data: params
  })
}
// put
const putAction = (url, params) => {
  return request({
    url,
    method: 'put',
    data: params
  })
}
// delete
const deleteAction = (url, params) => {
  return request({
    url,
    method: 'delete',
    params
  })
}
export { getAction, postAction, putAction, deleteAction }
