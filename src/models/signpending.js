const signpending = {
  state: {
    signPendingList: [],
    loading: false
  },
  reducers: {
    updateState(state, newState) {
      console.log('newState', newState)
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    getSignPendingList: async (payload = {}, rootState) => {
      try {
        dispatch({ type: 'signpending/updateState', payload: { loading: true } })
        // const { data } = await getSignPendingList(payload)
        // console.log('data', data)
        // dispatch.signpending.updateState({ signPendingList: data.signPendingList })
        dispatch({
          // type: 'signpending/updateState',
          // payload: { signPendingList: data.signPendingList, loading: false }
        })
      }
      catch (e) {
        console.error(e)
        dispatch({ type: 'signpending/updateState', payload: { loading: false } })
      }

    }
  })
}
export default signpending
