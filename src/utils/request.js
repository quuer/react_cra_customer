import { Toast } from 'antd-mobile'
import error from '../utils/error'

const request = (url, options) => {

  const headers = {}
  headers['Content-type'] = 'application/json'
  headers['token'] = 'testtoken'

  const defaultOptions = {
    headers,
    method: 'POST'
  }
  let newOptions = null
  if (options.method === 'POST') {
    newOptions = {
      ...defaultOptions,
      ...options,
      body: JSON.stringify(options.body)
    }
  }
  Toast.show({ icon: 'loading', maskClickable: false })
  return fetch(url, newOptions).
    then(res => res.json()).
    then(res => {
      Toast.clear()
      return res
    }).catch((e) => {
      error(e)
    })
}

export default request
