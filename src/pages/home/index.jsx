import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Card from '../../components/card'
import ProductDetail from '../../components/product_detail';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(_response => _response.json())
    .then(_data => setItems(_data))
  }, [])
  

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'> 
        { items?.map((_item) => (<Card key={_item.id} data={_item}/>))}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
