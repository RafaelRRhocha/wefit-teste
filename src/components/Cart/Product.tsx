import { MinusCircle, PlusCircle, Trash } from 'phosphor-react';
import { FC, useState } from 'react';
import {
  SChanges,
  SDetails, SIcon, SProduct
} from './styles';

interface ProductProps {
  id: number,
  title: string,
  price: number,
  image: string,
  removeProduct: () => void
}

const Product: FC<ProductProps> = ({ id, title, price, image, removeProduct }) => {
  const [count, setCount] = useState(1);

  return (
    <>
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
          <MinusCircle size={25} color="#4a8ef3" onClick={() => count > 1 && setCount(count - 1) } />
          <span>{ count }</span>
          <PlusCircle size={25} color="#4a8ef3" onClick={() => setCount(count + 1)} />
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
    </>
  );
}

export default Product;