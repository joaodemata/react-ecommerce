import { useContext } from 'react';
import { BackspaceIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import Layout from '../../components/layout';
import Card from '../../components/card';
import ProductDetail from '../../components/product_detail';

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {context.filteredItems?.map((_item) => (
            <Card key={_item.id} data={_item} />
          ))}
        </div>
      );
    } else if (context.filteredItems === null) {
      return (
        <div className='flex flex-col w-full h-32 justify-center items-center'>
          <EllipsisHorizontalIcon className='h-15 w-15 text-black mt-10' />
        </div>
      );
    } else {
      return (
        <div className='flex flex-col w-full h-32 justify-center items-center'>
          <h1 className='font-medium text-xl'>No matching products</h1>
          <BackspaceIcon className='h-10 w-10 text-black mt-10' />
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input type='text' placeholder='Search a product' className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' onChange={(_event) => context.setSearchByTitle(_event.target.value)} />
      {renderView()}
      <ProductDetail />
    </Layout>
  );
}

export default Home;
