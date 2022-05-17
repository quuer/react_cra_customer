import React, { Suspense } from 'react'
import { Route, Routes ,useRoutes} from 'react-router-dom'
import routes from '../../config/router'

/*react-routers v6的写法：
1.使用Routes代替Switch;
2.使用element代替component
*/
const Component = (props) => {
  console.log('basiprops', props)
  return (
    <Routes>
      {routes.map(route => {
        return (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            element={
              <Suspense>
                <route.component />
              </Suspense>
            }
          />
        )
      })}
    </Routes>
  )
}

export default Component
