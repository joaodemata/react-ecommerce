import {useRoutes, BrowserRouter} from 'react-router-dom'

import Home from '../home'
import MyAccount from '../my_account'
import MyOrder from '../my_order'
import MyOrders from '../my_orders'
import NotFound from '../not_found'
import SignIn from '../sign_in'
import NavBar from '../../components/nav_bar'
import './App.css'
 
const AppRoutes = () =>{
  let routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    }, 
    {
      path: '/my-account',
      element: <MyAccount/>
    }, 
    {
      path: '/my-order',
      element: <MyOrder/>
    }, 
    {
      path: '/my-orders',
      element: <MyOrders/>
    }, 
    {
      path: '/sign-in',
      element: <SignIn/>
    }, 
    {
      path: '/*',
      element: <NotFound/>
    }, 
  ])

  return routes
}

const App = () => {
 
  return (
<BrowserRouter>
  <AppRoutes/>
  <NavBar/>
</BrowserRouter>
  )
}

export default App
