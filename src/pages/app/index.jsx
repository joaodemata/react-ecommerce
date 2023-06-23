import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { ShoppingCardProvider, initializeLocalStorage, ShoppingCartContext } from '../../context';
import CheckoutSideMenu from '../../components/checkout_side_menu';
import { extractAndParseLocalStorage } from '../../utils';

import Home from '../home';
import MyAccount from '../my_account';
import MyOrder from '../my_order';
import MyOrders from '../my_orders';
import NotFound from '../not_found';
import SignIn from '../sign_in';
import NavBar from '../../components/nav_bar';
import './App.css';
 
const AppRoutes = () =>{
  const context = useContext(ShoppingCartContext);

  // Account 
  const account = extractAndParseLocalStorage('account');
  // Sign-out 
  const signOut = extractAndParseLocalStorage('sign-out');
  //Has an account 
  const noAccountInLocalStorage = account ? Object.keys(account).length === 0 : true;
  const noAccountInLocalState = Object.keys(context.account).length === 0; 
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || signOut;

  let changeRoutes = [ {
    path: '/',
    element: <Navigate replace to={'/sign-in'}/>
  }, 
  {
    path: '/clothes',
    element: <Navigate replace to={'/sign-in'}/>
  }, 
  {
    path: '/electronics',
    element: <Navigate replace to={'/sign-in'}/>
  }, 
  {
    path: '/furnitures',
    element: <Navigate replace to={'/sign-in'}/>
  }, 
  {
    path: '/toys',
    element: <Navigate replace to={'/sign-in'}/>
  }, 
  {
    path: '/others',
    element: <Navigate replace to={'/sign-in'}/>
  }, ];

  if(hasUserAnAccount && !isUserSignOut){
    changeRoutes = [ {
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
    }, ];
   
  }


  const routes = useRoutes([
    ...changeRoutes,
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
  initializeLocalStorage();

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
