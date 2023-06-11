import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();



export const ShoppingCardProvider = function ({ children }){
    // Shopping card - Counter
    const [count, setCount] = useState(0);

    // Product detail - Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)


    // Product detail - Show detail
    const [productToShow, setProductToShow] = useState({});

    // Shooping card - Add products 
    const [cartProducts, setCartProducts] = useState([]);

    // Checkout side menu - Open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Shooping Cart - order
    const [order, setOrder] = useState([]);

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
            setOrder
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}