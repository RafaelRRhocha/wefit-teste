import Link from 'next/link';
import type { FC } from 'react';
import { CartDetailsProps } from '../../interfaces';
import { SWrapperDetails } from './styles';

const CartDetails: FC<CartDetailsProps> = ({ text, url }) => {
  return (
    <SWrapperDetails>
      <p>{ text }</p>
      <picture>
        <img src={ url } alt="imageDetails" />
      </picture>
      <Link href="/">
        <button
          type="button"
        >
          VOLTAR
        </button>
      </Link>
  </SWrapperDetails>
  );
}

export default CartDetails;