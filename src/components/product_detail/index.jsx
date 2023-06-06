import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css';
import { ShoppingCardContext } from '../../context';

const ProductDetail = () =>{
    const context = useContext(ShoppingCardContext);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={()=> context.closeProductDetail()}/>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail