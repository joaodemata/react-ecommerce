import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout'
import OrdersCard from '../../components/orders_card'
import { ShoppingCardContext } from '../../context';

function MyOrders() {
  const context = useContext(ShoppingCardContext);

  return (
    <Layout> 
      <div className='flex items-center justify-center relative w-80'>
        <h1 className='font-medium text-xl'>My Orders</h1>

      </div>
      {
        context.order.map((_order, _index)=> {
          return (<Link key={_index}  to={`/my-orders/${_index}`} > 
            <OrdersCard totalPrice={_order.totalPrice} totalProducts={_order.totalProducts}/>
          </Link>)
        })
      }
    </Layout>
  )
}

export default MyOrders
