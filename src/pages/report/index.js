import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './index.less'

const COMPLAINT_TYPES = [
  {
    label: '涉黄信息', value: '001', children: [
      {
        label: '色情导流', value: '0011', render: {
          _html: (<>
            <div>冒犯、嘲讽他人</div>
            <input type="checkbox" />拉黑@先生
            <button onClick={() => {
              console.log('11---||', 11)
            }}>确认</button>
          </>)
        }
      },
      {
        label: '低俗信息', value: '0012', render: {
          _html: (<>
            <div>不属于以上分类</div>
          </>)
        }
      },
      { label: '招嫖信息', value: '0013' },
      { label: '色情图文', value: '0014' },
      { label: '色情视频', value: '0015' },
      { label: '头像昵称为违规', value: '0016' }
    ]
  },
  {
    label: '有害信息', value: '002', children: [
      { label: '邪教', value: '0021' },
      { label: '侮辱英烈', value: '0022' },
      { label: '暴恐血腥', value: '0023' },
      { label: '宗教民族', value: '0024' },
      { label: '虐杀动物', value: '0025' },
      { label: '其它有害信息', value: '0026' }
    ]
  },
  { label: '人身攻击', value: '003', children: [
      { label: '邪教', value: '00211' },
      { label: '侮辱英烈', value: '00212' },
      { label: '暴恐血腥', value: '00231' },
      { label: '宗教民族', value: '00241' },
      { label: '虐杀动物', value: '00251' },
      { label: '其它有害信息', value: '00261' }
    ] },
  { label: '违法信息', value: '004' },
  { label: '饭圈违规', value: '005' },
  { label: '违规营销', value: '006' },
  { label: '侵犯个人权益', value: '007' },
  { label: '不良价值导向', value: '008' },
  { label: '涉未成年人', value: '009' }
]

function App(props) {
  console.log('props---||', props)
  const { a, dispatch } = props
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeSubIndex, setActiveSubIndex] = useState(null)
  const handleAsync = () => {
    console.log('异步---||', a)
    dispatch({ type: 'global/incrementAsync', payload: { a: 1 } })

  }
  const handleSync = () => {
    console.log('同步---||', a)
    dispatch({ type: 'global/updateState', payload: { a: 1 } })
  }
  return (
    <div className={styles.App}>
      <div className={styles.box}>
        {COMPLAINT_TYPES.map((item, index) => {
          return (
            <div key={item.value}
                 onClick={() => {
                   setActiveIndex(index)
                   // setActiveSubIndex(null)
                 }}
                 style={{ color: activeIndex === index ? 'orange' : '' }}
                 className={styles.complaint_item}>
              {item.label}
            </div>
          )
        })}
      </div>
      <div>请选择具体原因</div>
      <div className={styles.subbox}>
        {activeIndex !== null &&
          COMPLAINT_TYPES[activeIndex].children?.map((item, index) => {
            return (
              <div key={item.value}
                   onClick={() => {
                     setActiveSubIndex(index)
                   }}
                   style={{ color: activeSubIndex === index ? 'orange' : '' }}
                   className={styles.complaint_subitem}>
                {item.label}
              </div>
            )
          })}
      </div>
      {activeSubIndex !== null &&
        activeIndex !== null &&
        COMPLAINT_TYPES[activeIndex]?.children?.[activeSubIndex]?.render?._html}
      <hr />
      {activeIndex !== null && <>
        <input type="checkbox" />
        <span>我已经阅读Xxx守则，确认此内容属于{COMPLAINT_TYPES[activeIndex].label}</span>
      </>}
      <button onClick={handleAsync}>dispatch异步</button>
      <button onClick={handleSync}>dispatch同步</button>
    </div>
  )
}
const mapState = (rooState) => {
  console.log('state.about', rooState)
  return rooState
}
const mapDispatch = (dispatch) => {
  console.log('dispatch', dispatch)
  // const { global: { updateState, incrementAsync } } = dispatch
  // updateState: (newVal) => dispatch.about.updateState(newVal),
  return {
    dispatch
  }
}
export default connect(mapState, mapDispatch)(App)
// export default connect(({ global }) => global, dispatch => ({ dispatch }))(App)
