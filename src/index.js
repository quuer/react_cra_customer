import React from 'react'
import ReactDOM from 'react-dom/client'
import BasicLayout from './components/BasicLayout'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'lib-flexible'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <BasicLayout />
    </HashRouter>
  </Provider>
  // </React.StrictMode>
)
