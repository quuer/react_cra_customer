const login = {
  state: 0, // initial state
  reducers: {
    increment(state, payload) {
      return state + payload
    }
  },
  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    }
  })
}
export default login
