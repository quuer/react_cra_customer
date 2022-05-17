import React from 'react'
import { Toast } from 'antd-mobile'
import { ExclamationCircleOutline } from 'antd-mobile-icons'

export default (error, duration = 122500) => {
  Toast.show({
    // icon: 'fail',
    icon: <ExclamationCircleOutline fontSize={50} />,
    content: <>
      <div style={{ textAlign: 'center' }}>{error?.errcode ?? '网络连接失败'}</div>
      <div style={{ textAlign: 'center' }}>{error?.errmsg}</div>
    </>,
    duration,
    maskClickable: false // 不允许点击背景
  })
}
