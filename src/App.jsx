import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as ROUTES from './router/router'

import PageLoader from './components/Page-Loader'
import { auth } from './lib/firebase'

const Register = lazy(() => import('./pages/register'))
const Login = lazy(() => import('./pages/login'))

function App() {
  console.log(auth)
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        {/* <Route element={<PrivateRoute />}>
          <Route path={ROUTES.HOME} element={< />} />
        </Route> */}
      </Routes>
    </Suspense>
  )
}

export default App
