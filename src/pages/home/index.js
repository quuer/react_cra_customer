import React from 'react'
import classnames from 'classnames'
import styles from './index.less'

const Component = () => {
  const className = classnames({ [styles.class_fz]: false, [styles.class_clr]: true })
  return (
    <>
      <div className={classnames({ 'styles.class_fz': false, 'styles.class_clr': true })}>home0</div>
      <div className={className}>home1</div>
      <div className={classnames(styles.class_fz, styles.class_clr)}>home2</div>
      <div className={classnames({ [styles.class_fz]: true }, styles.class_clr)}>home3</div>
      <div className={classnames([styles.class_fz], styles.class_clr)}>home4</div>
      <div className={classnames({ [styles.class_fz]: true }, styles.class_clr)}>home4</div>
    </>
  )
}

export default Component
