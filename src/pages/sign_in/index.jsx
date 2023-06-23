import {  Link, Navigate } from 'react-router-dom';
import { useContext, useState, useRef } from 'react';
import { ShoppingCartContext } from '../../context';
import Layout from '../../components/layout';
import { extractAndParseLocalStorage } from '../../utils';

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info');
  const form = useRef(null);

  // Account 
  const account = extractAndParseLocalStorage('account');
  // Has an account 
  const noAccountInLocalStorage = account ? Object.keys(account).length === 0 : true;
  const noAccountInLocalState = context.account  ? Object.keys(context.account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(false);
    // Redirect 
    return <Navigate replace to={'/'}/>; 
  };
  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };
    // Create account
    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringifiedAccount);
    context.setAccount(data);
    // Sign in 
    handleSignIn();
  };

  const renderLogIn = () => {
    return (
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Email:</span>
          <span>{account?.email}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password:</span>
          <span>{account?.password}</span>
        </p>
        <Link
          to='/'>
          <button className='bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2' disabled={!hasUserAnAccount} onClick={()=> handleSignIn()}>Log in</button>

        </Link>
        <div className='text-center'>
          <a className='font-light text-xs underline underline-offset-4' href="/">Forgot my password</a>
        </div>
        <button className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3' disabled={hasUserAnAccount} onClick={()=> setView('create-user-info')}>
             Sign up
        </button>
      </div>
    );
  };
  
  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='font-light text-sm'>Your name:</label>
          <input type="text" id='name' name='name' defaultValue={account?.name} placeholder='Peter' className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-light text-sm'>Your email:</label>
          <input type="text" id='email' name='email' defaultValue={account?.email} placeholder='joao.demata.andres@gmail.com' className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-light text-sm'>Your Password:</label>
          <input type="text" id='password' name='password' defaultValue={account?.password} placeholder='********' className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <Link to='/'>
          <button className='bg-black text-white w-full rounded-lg py-3' onClick={()=>createAnAccount()}>
                Create
          </button>
        </Link>
      </form>
    );
  };

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn();
  return (
    <Layout>
      <h1 className='font-medium text-xl text-center mb-6 w-80'>Welcome</h1>
      {renderView()}
    </Layout>
  );
}

export default SignIn;
