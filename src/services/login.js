import request from '../utils/request'

const env = process.env.NODE_ENV === 'production' ? '/api' : ''
export const logIn = (data) => {
  return request(`${env}/users/login`, { method: 'POST', body: data })
}
// export const logIn = (data) => {
//   return request(`/api/users/login`, { method: 'POST', body: data })
// }
