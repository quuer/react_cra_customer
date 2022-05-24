import request from '../utils/request'

export const getApiTest = (data) => {
  return request('https://www.yiketianqi.com/free/day?appid=65785499&appsecret=I1sN3GMv&unescape=1', {
    method: 'GET',
    body: data
  })
}
