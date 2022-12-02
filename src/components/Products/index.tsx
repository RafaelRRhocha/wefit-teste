import { useEffect, useState } from 'react';
import { IProducts } from '../../interfaces';
import Loading from '../Loading';
import Button from './Button';
import { SProduct, SWrapper } from './styles';

const Products = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
    .then(resp => resp.json())
    .then(setProducts);
  }, []);

  return (
    <>
     {!products ? <Loading />  : (
      <SWrapper>
        {products.map(({ id, title, price, image }: IProducts) => (
          <SProduct key={ id }>
            <picture>
              <img src={ image } alt={ title } />
            </picture>
            <p>{ title }</p>
            <h3>{ price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</h3> 
            <Button id={ id } title={ title } price={ price } image={ image } />
          </SProduct>
        ))}
      </SWrapper>
     )}
    </>
  );
}

export default Products;