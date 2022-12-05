import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Button from "../components/Products/Button";
import { SProduct, SWrapper } from "../components/Products/styles";
import { IProducts } from "../interfaces";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
    .then(resp => resp.json())
    .then(setProducts);
  }, []);

  return (
    <>
      <Header />
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
  )
}
