import { MinusCircle, PlusCircle, Trash } from 'phosphor-react';
import { FC, useState } from 'react';
import { useAppData } from '../../context/hooks/useApp';
import { ProductProps } from '../../interfaces';
import { updateCart } from '../../localstorage';
import { SChanges, SDetails, SIcon, SProduct } from './styles';

const Product: FC<ProductProps> = ({
  id,
  title,
  price,
  image,
  qtd,
  removeProduct,
  totalValue
}) => {
  const { setCart, totalItems } = useAppData();
  const [count, setCount] = useState<any>(qtd);

  const decreaseCount = () => {
    setCount(count - 1);
    const cartUpdated = updateCart(
      {
        id,
        title,
        price,
        image,
        qtd: count - 1,
        newPrice: price * (count - 1)
      });
    totalValue(cartUpdated);
    totalItems(cartUpdated);
    setCart(cartUpdated);
  }

  const incrementCount = () => {
    setCount(count + 1)
    const cartUpdated = updateCart(
      {
        id,
        title,
        price,
        image,
        qtd: count + 1,
        newPrice: price * (count + 1)
      });
    totalValue(cartUpdated);
    totalItems(cartUpdated);
    setCart(cartUpdated);
  }

  return (
    <SProduct key={ id }>
      <SDetails>
        <picture>
          <img src={ image } alt={ title } />
        </picture>
        <div>
          <p>{ title }</p>
          <h3>{ price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h3>
        </div>
      </SDetails>
      <SChanges>
        <div>
          <MinusCircle
          size={ 25 }
            onClick={() => count > 1 && decreaseCount() }
            style={{ cursor: count > 1 ? 'pointer' : 'not-allowed' }}
          />
          <span>{ count }</span>
          <PlusCircle
            size={ 25 }
            onClick={() => incrementCount() }
            style={{ cursor: 'pointer' }}
          />
        </div>
        <section>
          <span>SUBTOTAL</span>
          <p>{ (price * count).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</p>
        </section>
      </SChanges>
      <SIcon>
        <Trash size={ 25 }
          color="#f50808"
          onClick={ removeProduct }
        />
      </SIcon>
    </SProduct>
  );
}

export default Product;