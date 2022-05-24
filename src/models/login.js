import { logIn } from '../services/login'
import { Toast } from 'antd-mobile'

const login = {
  state: {}, // initial state
  reducers: {
    increment(state, payload) {
      return state + payload
    }
  },
  effects: (dispatch) => ({
    async login({ params, callback }, rootStsate) {
      console.log(params, callback, '◀◀◀payload, callback')
      const res = await logIn(params)
      if (res.code === 0) {
        sessionStorage.setItem('token', res.result.token)
        callback && callback()
      }
      else {
        Toast.show({ icon: 'fail', content: '密码或账号错误' })
      }
    }
  })
}
export default login
