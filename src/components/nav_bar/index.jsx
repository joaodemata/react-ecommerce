import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../shopping_cart';
import { extractAndParseLocalStorage } from '../../utils';


const NavBar = () => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

  // Sign out 
  const signOut = extractAndParseLocalStorage('sign-out');
  const isUserSignOut = context.signOut || signOut;
  // Account 
  const account = extractAndParseLocalStorage('account');
  // Has an account
  const noAccountInLocalStorage = account ? Object.keys(account).length === 0: true;
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0: true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(true);
  };

  const renderRightNavBar = () => {
    if(hasUserAnAccount && !isUserSignOut){
      return (<>
        <li className="text-black/60">
          {account?.email}
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
          isActive ? activeStyle : undefined
            }>
        My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
          isActive ? activeStyle : undefined
            }>
        My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
          isActive ? activeStyle : undefined
            }
            onClick={()=> handleSignOut()}>
        Sign out
          </NavLink>
        </li> </>);

    }
    else {
      return( <li>
        <NavLink
          to='/sign-in'
          className={({ isActive }) =>
          isActive ? activeStyle : undefined
          }
          onClick={()=> handleSignOut()}>
        Sign in
        </NavLink>
      </li>);
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to={`${isUserSignOut ? 'sign-in': '/'}`}
            onClick={() => context.setSearchByCategory(null)}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory(null)}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined

            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3  ">
        {renderRightNavBar()}
        <li className='flex'>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;