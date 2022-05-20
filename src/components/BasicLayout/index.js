import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { generatePath, useNavigate,useLocation } from 'react-router-dom'

import { routes } from '../../config/router'

/*react-routers v6的写法：
1.使用Routes代替Switch;
2.使用element代替component
*/
const Component = (props) => {
  const location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
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
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Component
