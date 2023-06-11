import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from '../../context';
import OrderCard from '../order_card';
import {totalPrice} from '../../utils';
import './styles.css';

const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCardContext);

    const handleDelete = (_id) => {
        const filteredProducts = context.cartProducts.filter(_product => _product.id != _id);
        context.setCartProducts(filteredProducts)
    }
    
    const handleCheckout = () => {
        const orderToAdd = {date: '01.02.23', products: context.cartProducts, totalProducts: context.cartProducts.length, totalPrice: totalPrice(context.cartProducts)}
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={()=> context.closeCheckoutSideMenu()}/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(_product => {
                        return <OrderCard key={_product.id} id={_product.id} title={_product.title} imageUrl={_product.images} price={_product.price} handleDelete={handleDelete}/>
                    })
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-ligth'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button className='w-full bg-black py-3 text-white rounded-lg mb-6' onClick={()=> handleCheckout() }>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;