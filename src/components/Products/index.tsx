import { useEffect, useState } from 'react';
import Loading from '../Loading';
import Button from './Button';
import { SProduct, SWrapper } from './styles';

interface ProductsTypes {
  id: number,
  title: string,
  price: number,
  image: string
}

const Products = ({}) => {
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    fetch('/api/products')
    .then(resp => resp.json())
    .then(setProjects);
  }, []);

  return (
    <>
     {!projects ? <Loading />  : (
      <SWrapper>
        {projects.map(({ id, title, price, image }: ProductsTypes) => (
          <SProduct key={ id }>
            <picture>
              <img src={ image } alt={ title } />
            </picture>
            <p>{ title }</p>
            <h3>{`R$ ${price}`}</h3> 
            <Button id={ id } title={ title } price={ price } image={ image } />
          </SProduct>
        ))}
      </SWrapper>
     )}
    </>
  );
}

export default Products;