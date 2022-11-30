import { MinusCircle, PlusCircle, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { deleteProducts, readCart } from '../../localstorage';
import Header from '../Header';
import CartDetails from './CartDetails';
import {
  SChanges,
  SDetails,
  SFinish, SInfos, SProduct,
  SWrapper
} from './styles';

interface ProductsTypes {
  id: number,
  title: string,
  price: number,
  image: string
}

const Cart = ({}) => {
  const [cart, setCart] = useState<any>(null);
  const [count, setCount] = useState(1);
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
            {cart?.map(({ id, title, price, image }: ProductsTypes) => (
              <SProduct key={ id }>
                <picture>
                  <img src={ image } alt={ title } />
                </picture>
                <div>
                  <SDetails>
                    <p>{ title }</p>
                    <p>{`R$ ${ price }`}</p>
                  </SDetails>
                  <SChanges>
                    <MinusCircle size={25} color="#4a8ef3" onClick={() => setCount(count - 1)} />
                    <span>{ count }</span>
                    <PlusCircle size={25} color="#4a8ef3" onClick={() => setCount(count + 1)} />
                  </SChanges>
                  <SInfos>
                    <p>{`R$ ${ price }`}</p>
                    <Trash size={25}
                      color="#f50808"
                      onClick={() => removeProduct(id)}
                      style={{ cursor: 'pointer' }}
                    />
                  </SInfos>
                </div>
              </SProduct>
            ))}
            <hr />
            <SFinish>
              <button type="button" onClick={() => setMode('finished')}>
                Finalizar Pedido
              </button>
              <div>
                <p>{`Total`}</p>
                <h1>{`R$ ${29.90}`}</h1>
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