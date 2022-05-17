const login = {
  name: 'global',
  state: {
    currentPath: null,
    expanedMenuKeys: [],
    selectedMenuKeys: [],
    a: 5
  },
  reducers: {
    updateState(state, newState) {
      console.log('newState', state, newState)
      return { ...state, ...newState }
    }
  },
  effects: (dispatch) => ({
    async incrementAsync(payload) {
      console.log('payload', payload)
      // dispatch.global.updateState({ global: 'testglobal' })
      dispatch({ type: 'global/updateState', payload })
    }
  })
}
export default login
