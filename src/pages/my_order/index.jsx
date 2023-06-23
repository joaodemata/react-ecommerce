import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import Layout from '../../components/layout';
import OrderCard from '../../components/order_card';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if(index === 'last') index = context.order?.length - 1; 

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        <h1>MyOrder</h1>

      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index].products.map(_product => {
            return <OrderCard key={_product.id} id={_product.id} title={_product.title} imageUrl={_product.images} price={_product.price}/>;
          })
        }
      </div>
    </Layout>
  );
}

export default MyOrder;
