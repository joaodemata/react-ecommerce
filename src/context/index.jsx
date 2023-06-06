import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();



export const ShoppingCardProvider = function ({ children }){
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}