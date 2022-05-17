const about = {
  state: {
    count: 0,
    name: 'rime',
    age: '22'
  },
  reducers: {
    updateState(state, newState) {
      console.log('newState', newState)
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    incrementAsync: async (payload, rootState) => {
      const res = await new Promise(resolve => setTimeout(resolve, 1000))
      // dispatch({ type: 'about/updateState', payload })
      console.log(payload, rootState, res)
      dispatch.about.updateState(payload)
    }
  })
}
export default about
