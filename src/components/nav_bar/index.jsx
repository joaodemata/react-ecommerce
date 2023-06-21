import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCardContext } from '../../context';
import { NavLink } from 'react-router-dom';
import { extractAndParseLocalStorage } from '../../utils';

const NavBar = () => {
  const context = useContext(ShoppingCardContext);

  const activeStyle = 'underline underline-offset-4';

  //Sign out 
  const signOut = extractAndParseLocalStorage('sign-out');
  const isUserSignOut = context.signOut || signOut;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(true);
  };

  const renderRightNavBar = () => {
    if(isUserSignOut){
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
    else {
      return (<>
        <li className="text-black/60">
      joao.demata.andres@gmail.com
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
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light ">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'
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
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <div>
            {context.count}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;