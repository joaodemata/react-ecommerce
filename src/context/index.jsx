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

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}