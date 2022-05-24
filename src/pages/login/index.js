import React from 'react'
import { Form, Input, Button, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import cat from '../../assets/images/cat.png'

const { useForm } = Form

const Component = (props) => {
  const [form] = useForm()
  const { resetFields, setFieldsValue, validateFields } = form
  const navigate = useNavigate()
  const { dispatch } = props
  async function onFinish() {
    console.log(process.env.NODE_ENV, '◀◀◀process.env.NODE_ENV')
    try {
      const values = await validateFields()
      dispatch({
        type: 'login/login',
        payload: {
          params: values,
          callback: () => {
            navigate('/about')
          }
        }
      })
    }
    catch (e) {
      Toast.show({ content: e?.errorFields?.[0]?.errors[0] })
    }

  }
  function setFieldVal() {
    setFieldsValue({ user_name: 'admin', password: '123456' })
  }
  return (<div>
    <Form
      form={form}
      onFinish={onFinish}
    >
      <div>
        <div>
          <img src={cat} alt="" style={{ width: '100%' }} />
        </div>
        <Form.Item name="user_name" label="账号" rules={[{ required: true }]}>
          <Input placeholder="请输入账号" clearable />
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[{ required: true }]}>
          <Input placeholder="请输入密码" clearable />
        </Form.Item>
      </div>
    </Form>
    <Button block onClick={onFinish} color="primary" size="large" shape="rounded" style={{ margin: '15px 0' }}>
      登录
    </Button>
    <Button block onClick={setFieldVal} color="primary" size="large" shape="rounded">
      使用管理员账号
    </Button>
  </div>)
}

const mapState = ({ login }) => login
const mapDispatch = dispatch => ({ dispatch })

export default connect(mapState, mapDispatch)(Component)
