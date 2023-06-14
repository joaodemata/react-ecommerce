import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCardProvider } from '../../context';
import CheckoutSideMenu from '../../components/checkout_side_menu';

import Home from '../home';
import MyAccount from '../my_account';
import MyOrder from '../my_order';
import MyOrders from '../my_orders';
import NotFound from '../not_found';
import SignIn from '../sign_in';
import NavBar from '../../components/nav_bar';
import './App.css';
 
const AppRoutes = () =>{
  const routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    }, 
    {
      path: '/clothes',
      element: <Home/>
    }, 
    {
      path: '/electronics',
      element: <Home/>
    }, 
    {
      path: '/furnitures',
      element: <Home/>
    }, 
    {
      path: '/toys',
      element: <Home/>
    }, 
    {
      path: '/others',
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
      path: '/my-orders/last',
      element: <MyOrder/>
    }, 
    {
      path: '/my-orders/:id',
      element: <MyOrder/>
    }, 
    {
      path: '/sign-in',
      element: <SignIn/>
    }, 
    {
      path: '/*',
      element: <NotFound/>
    }, 
  ]);

  return routes;
};

const App = () => {
 
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App;
