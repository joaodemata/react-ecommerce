import { createContext, useState, useEffect } from 'react';

export const ShoppingCardContext = createContext();



export const ShoppingCardProvider = function ({ children }){
    // Shopping card - Counter
  const [count, setCount] = useState(0);

    // Product detail - Open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);


    // Product detail - Show detail
  const [productToShow, setProductToShow] = useState({});

    // Shooping card - Add products 
  const [cartProducts, setCartProducts] = useState([]);

    // Checkout side menu - Open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Shooping Cart - order
  const [order, setOrder] = useState([]);

    // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

    // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

    // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(_response => _response.json())
      .then(_data => setItems(_data));
  }, []);

  const filteredItemsByTitle = (_items, _searchByTitle) => {
    return items?.filter((_item) => String(_item.title).toLowerCase().includes(String(_searchByTitle).toLowerCase()));
  };

  const filteredItemsByCategory = (_items, _searchByCategory) => {
    return items?.filter((_item) => String(_item.category.name).toLowerCase().includes(String(_searchByCategory).toLowerCase()));
  };

  const filterBy = (_searchType, _items, _searchByTitle, _searchByCategory) => {
    console.log(_searchType, _items, _searchByTitle, _searchByCategory);
    if(_searchType == 'BY_TITLE'){
      return filteredItemsByTitle(_items, _searchByTitle);
    }

    if(_searchType == 'BY_CATEGORY'){
      return filteredItemsByCategory(_items, _searchByCategory);
    }

    if(_searchType == 'BY_TITLE_AND_CATEGORY'){
      return filteredItemsByTitle(_items, _searchByTitle).filter((_item) => String(_item.category.name).toLowerCase().includes(String(_searchByCategory).toLowerCase()));
    } 

    if(!_searchType){
      return _items;
    }         
  };

  useEffect(()=>{
    if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
    else if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory));
    else if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
    else if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));

  }, [items, searchByTitle, searchByCategory]);
    
  return (    
    <ShoppingCardContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCardContext.Provider>
  );
};