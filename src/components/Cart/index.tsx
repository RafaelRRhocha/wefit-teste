import { useEffect, useState } from 'react';
import { deleteProducts, readCart } from '../../localstorage';
import Header from '../Header';
import CartDetails from './CartDetails';
import Product from './Product';
import {
  SFinish, SNav, SWrapper
} from './styles';

interface ProductsTypes {
  id: number,
  title: string,
  price: number,
  image: string
}

const Cart = ({}) => {
  const [cart, setCart] = useState<any>(null);
  const [mode, setMode] = useState('inprogress');

  useEffect(() => {
    const getCart = readCart();
    setCart(getCart);
  }, []);

  const removeProduct = (id: number) => {
    deleteProducts(id);
    setCart((old: any) => old.filter((product: any) => product.id !== id));
  };

  return (
    <>
      <Header />
      {mode === 'inprogress' ? (
        !cart || cart.length === 0 ? (
          <CartDetails
            text={ 'Parece que não há nada por aqui :(' }
            url={ 'https://user-images.githubusercontent.com/99758843/204913857-9ca53e98-a312-4967-9d15-bcd6e315061c.png' }
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
            {cart?.map(({ id, title, price, image }: ProductsTypes) => (
              <div key={ id }>
                <Product removeProduct={() => removeProduct(id) } id={ id } title={ title } price={ price } image={ image } />
              </div>
            ))}
            <hr />
            <SFinish>
              <button type="button" onClick={() => setMode('finished')}>
                Finalizar Pedido
              </button>
              <div>
                <p>{`Total`}</p>
                <h1>Preço Final</h1>
              </div>
            </SFinish>
          </SWrapper>
        )
      ) : (
        <CartDetails
          text={ 'Compra realizada com sucesso!' }
          url={ 'https://user-images.githubusercontent.com/99758843/204914200-ce7c072a-f337-4061-8765-71e8a6354474.png' }
        />
      )}
    </>
  );
}

export default Cart;