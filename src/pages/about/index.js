import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './index.less'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'

const Component = (props) => {
  const navigate = useNavigate()
  const { dispatch, city, wea, win, win_speed, win_meter } = props
  const ongetApiTest = () => {
    dispatch({ type: 'apitest/getApiTest' })
  }
  const onNavigate = () => {
    navigate('/login')
  }
  return (
    <div className={styles.about}>
      {/*<Button onClick={onNavigate}>登录</Button>*/}
      <Button onClick={ongetApiTest} color="success">请求</Button>
      <ul>
        <li>城市：{city}</li>
        <li>天气：{wea}</li>
        <li>风向：{win}</li>
        <li>风力：{win_speed}</li>
        <li>风速：{win_meter}</li>
      </ul>
    </div>
  )
}

const mapState = ({ apitest }) => apitest
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)

