import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routers from '../../config/router'

/*react-routers v6的写法：
1.使用Routes代替Switch;
2.使用element代替component
*/
const Component = (props) => {
  console.log('basiprops', props)
  return (
    <Routes>
      {routers.map(router => {
        return (
          <Route
            key={router.path}
            exact={router.exact}
            path={router.path}
            element={
              <Suspense>
                <router.component />
              </Suspense>
            }
          />
        )
      })}
    </Routes>
  )
}

export default Component
