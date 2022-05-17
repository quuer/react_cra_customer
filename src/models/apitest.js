import { getApiTest } from '../services/apiTest'
import error from '../utils/error'

const apiTest = {
  state: {
    age: 55
  },
  reducers: {
    setState(state, newState) {
      console.log('newState', newState)
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    async getApiTest(payload, rootState) {
      console.log(payload, '◀◀◀payload')
      const res = await getApiTest(payload)
      console.log(res, '◀◀◀res')
      if (res && !res.hasOwnProperty('errcode')) {
        const { city, wea, win, win_speed, win_meter } = res
        dispatch({ type: 'apitest/setState', payload: { city, wea, win, win_speed, win_meter } })
      }
      else {
        error(res)
      }

    }
  })
}
export default apiTest
