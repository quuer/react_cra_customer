const signpending = {
  state: {},
  reducers: {
    updateState(state, newState) {
      console.log('newState', newState)
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    query: async (payload = {}, rootState) => {
      console.log('query')
    }
  })
}
export default signpending
