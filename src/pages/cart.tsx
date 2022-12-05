import { useEffect, useState } from "react";
import CartDetails from "../components/Cart/CartDetails";
import Product from "../components/Cart/Product";
import { SFinish, SNav, SWrapper } from "../components/Cart/styles";
import Header from "../components/Header";
import { useAppData } from "../context/hooks/useApp";
import { IProducts } from "../interfaces";
import { deleteProducts, readCart } from "../localstorage";

export default function CartRoute() {
  const { cart, setCart, setQnt, finalPrice, totalValue, totalItems } = useAppData();
  const [mode, setMode] = useState('inprogress');

  useEffect(() => {
    const getCart = readCart();
    setCart(getCart);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cart) {
      totalValue(cart);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const removeProduct = (id: number) => {
    const updatedProducts = deleteProducts(id);
    setCart(updatedProducts);
    totalItems(updatedProducts);
  };

  const orderStatusFinished = () => {
    setCart([]);
    localStorage.removeItem('products');
    setQnt(0);
    setMode('finished')
  };

  const URLS = {
    nothingHere: 'https://user-images.githubusercontent.com/99758843/205402970-b6ea9d48-44a7-4de0-9739-42f2d7b8f036.png',
    orderFinished: 'https://user-images.githubusercontent.com/99758843/205402671-c51ac4c5-1b7e-4104-9dcd-dd6646e1dc6c.png'
  };

  return (
    <>
      <Header />
      {mode === 'inprogress' ? (
        !cart || cart.length === 0 ? (
          <CartDetails
            text={ 'Parece que não há nada por aqui :(' }
            url={ URLS.nothingHere }
          />
        ) : (
          <SWrapper>
            <SNav>
              <p>PRODUTO</p>
              <div>
                <p>QTD</p>
                <p>SUBTOTAL</p>
              </div>
            </SNav>
            {cart?.map(({ id, title, price, image, qtd }: IProducts) => (
              <div key={ id }>
                <Product
                  removeProduct={() => removeProduct(id) }
                  id={ id }
                  title={ title }
                  price={ price }
                  image={ image }
                  totalValue={ totalValue }
                  qtd={ qtd }
                />
              </div>
            ))}
            <hr />
            <SFinish>
              <button type="button" onClick={() => orderStatusFinished()}>
                Finalizar Pedido
              </button>
              <div>
                <p>{`Total`}</p>
                <h1>{ finalPrice?.toFixed(2) }</h1>
              </div>
            </SFinish>
          </SWrapper>
        )
      ) : (
        <CartDetails
          text={ 'Compra realizada com sucesso!' }
          url={ URLS.orderFinished }
        />
      )}
    </>
  )
}
