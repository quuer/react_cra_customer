import React from 'react'
import { Button, Space } from 'antd-mobile'
import { MinusCircleOutline } from 'antd-mobile-icons'

const Component = () => {
  return (<>
    <Button loading loadingText="请求中" color="primary">Primary</Button>
    <Button style={{ '--text-color': '#F00', '--border-radius': '15px' }} color="success">Success</Button>
    <Button color="danger">Danger</Button>
    <Button color="warning">Warning</Button>
    <MinusCircleOutline fontSize={48} color="#f00" />
  </>)
}

export default Component
