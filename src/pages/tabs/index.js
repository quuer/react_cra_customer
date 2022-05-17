import React, { useEffect, useRef, useState } from 'react'
import styles from './index.less'
import { CapsuleTabs } from 'antd-mobile'
import classnames from 'classnames'

const tabs = [
  { label: '苹果1', value: '01' },
  { label: '苹果2', value: '02' },
  { label: '苹果3', value: '03' },
  { label: '苹果4', value: '04' },
  { label: '苹果5', value: '05' },
  { label: '苹果6', value: '06' },
  { label: '苹果7', value: '07' },
  { label: '苹果8', value: '08' }
]
const Component = () => {
  const wrapperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const onTabClick = (item, index) => {
    setActiveIndex(index)
    console.log(item, index, '◀◀◀item, index')
    const activeNode = wrapperRef.current.childNodes[index]
    const activeNodeWidth = activeNode.getBoundingClientRect().width
    const wrapperWidth = wrapperRef.current.getBoundingClientRect().width
    const clientWidth = document.documentElement.clientWidth
    const offsetHalfX = (clientWidth - activeNodeWidth) / 2
    const activeNodeRX = wrapperWidth - activeNodeWidth - activeNode.offsetLeft
    // console.log(activeNode.offsetLeft, offsetHalfX, activeNodeRX, offsetHalfX, '◀◀◀offsetHalfX')
    if (activeNode.offsetLeft > offsetHalfX && activeNodeRX > offsetHalfX) {
      console.log('居中')
      wrapperRef.current.style.left = `-${activeNode.offsetLeft - offsetHalfX}px`
    }
    else if (activeNode.offsetLeft < offsetHalfX && activeNodeRX > offsetHalfX) {
      wrapperRef.current.style.left = 0
    }
    else if (activeNode.offsetLeft > offsetHalfX && activeNodeRX < offsetHalfX) {
      wrapperRef.current.style.left = `-${wrapperWidth - clientWidth + 15}px`
    }
    // wrapperRef.current.style.width = 92 * (tabs.length - 1) + 'px'
  }

  useEffect(() => {
    // console.log(wrapperRef.current, '◀◀◀wrapperRef')
    wrapperRef.current.style.width = 92 * (tabs.length - 1) + 'px'
  }, [])
  return (<div className={styles.tabs}>
    <div className={styles.wrapper} ref={wrapperRef}>
      {tabs.map((item, index) => {
        return (
          <span className={classnames(styles.tab_item, { [styles.active]: activeIndex === index })}
                onClick={() => {
                  onTabClick(item, index)
                }}
                key={item.value}>{item.label}</span>
        )
      })}
    </div>
    {/*<CapsuleTabs defaultActiveKey='1'>*/}
    {/*  <CapsuleTabs.Tab title='Espresso' key='1'>*/}
    {/*    1*/}
    {/*  </CapsuleTabs.Tab>*/}
    {/*  <CapsuleTabs.Tab title='Coffee Latte' key='2'>*/}
    {/*    2*/}
    {/*  </CapsuleTabs.Tab>*/}
    {/*  <CapsuleTabs.Tab title='Cappuccino' key='3'>*/}
    {/*    3*/}
    {/*  </CapsuleTabs.Tab>*/}
    {/*  <CapsuleTabs.Tab title='Americano' key='4'>*/}
    {/*    4*/}
    {/*  </CapsuleTabs.Tab>*/}
    {/*  <CapsuleTabs.Tab title='Flat White' key='5'>*/}
    {/*    5*/}
    {/*  </CapsuleTabs.Tab>*/}
    {/*  <CapsuleTabs.Tab title='Caramel Macchiato' key='6'>*/}
    {/*    6*/}
    {/*  </CapsuleTabs.Tab>*/}
    {/*  <CapsuleTabs.Tab title='Cafe Mocha' key='7'>*/}
    {/*    7*/}
    {/*  </CapsuleTabs.Tab>*/}
    {/*</CapsuleTabs>*/}
  </div>)
}

export default Component
