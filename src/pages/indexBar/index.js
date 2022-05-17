import React, { useState, useEffect } from 'react'
import styles from './index.less'

const letter = ['A', 'B', 'C', 'D', 'E', 'F']
const content = [
  {
    title: 'Aaaa',
    children: ['A1', 'A11', 'A21', 'A31', 'A41', 'A51', 'A61', 'A71']
  },
  {
    title: 'Bbbb',
    children: ['B1', 'B11', 'B21', 'B31', 'B41', 'B51', 'B61', 'B71']
  },
  {
    title: 'Cccc',
    children: ['C1', 'C11', 'C21', 'C31', 'C41', 'C51', 'C61', 'C71']
  },
  {
    title: 'Ddddd',
    children: ['D1', 'D11', 'D21', 'D31', 'D41', 'D51', 'D61', 'D71']
  },
  {
    title: 'Eeee',
    children: ['E1', 'E11', 'E21', 'E31', 'E41', 'E51', 'E61', 'E71']
  },
  {
    title: 'Ffff',
    children: ['F1', 'F11', 'F21', 'F31', 'F41', 'F51', 'F61', 'F71']
  }
]
const Component = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollItems = Array.from(document.querySelectorAll('.scrollItem'))
      scrollItems.forEach((item, index) => {
        if (item.getBoundingClientRect().top <= 0 && item.getBoundingClientRect().bottom > 0) {
          console.log(item, index, '◀◀◀index')
          if (activeIndex !== index) {
            setActiveIndex(index)
          }
        }
      })
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])
  return (
    <div className={styles.indexBar}>
      <div className="content">
        {content.map((item, index) => {
          return (
            <div key={item.title} className="scrollItem" data-scroll={index}>
              <h3>{item.title}</h3>
              {item.children.map(itm => {
                return (
                  <div className={styles.itm_label} key={itm}>{itm}</div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className={styles.indicator}>
        {letter.map((item, index) => {
          return (
            <div key={item}
                 className={activeIndex === index ? styles.active : null}
            >{item}</div>
          )
        })}
      </div>
    </div>)
}

export default Component
