import { createContext, FC, useEffect, useState } from "react";
import { AppContextProps, AppProviderProps, IProducts } from "../interfaces";
import { readCart } from "../localstorage";

const AppContext = createContext<AppContextProps>({})

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [qnt, setQnt] = useState(0);

  const totalValue = (newCart: IProducts[]) => {
    const getAllValues = newCart.reduce((acc: any, { newPrice }) => acc + newPrice, 0);
    setFinalPrice(getAllValues);
  }

  const totalItems = (itemCart: IProducts[]) => {
    if (itemCart) {
      const getAllItems = itemCart.reduce((acc: any, { qtd }) => acc + qtd, 0);
      setQnt(getAllItems);
    }
    const getAllItems = cart.reduce((acc: any, { qtd }) => acc + qtd, 0);
    setQnt(getAllItems);
  }

  useEffect(() => {
    const getCart = readCart();
    setCart(getCart);
  }, []);

  const data = {
    cart,
    finalPrice,
    qnt,
    setCart,
    setQnt,
    totalValue,
    totalItems
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext