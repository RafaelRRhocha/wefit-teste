import { useRouter } from 'next/router';
import type { FC } from 'react';

import { SWrapperDetails } from './styles';

interface CartDetailsProps {
  text: string
  url: string
}

const CartDetails: FC<CartDetailsProps> = ({ text, url }) => {
  const router = useRouter();

  const finishProducts = () => {
    localStorage.clear();
    router.push('/');
  }

  return (
    <SWrapperDetails>
      <p>{ text }</p>
      <picture>
        <img src={ url } alt="imageDetails" />
      </picture>
      <button
        type="button"
        onClick={() => finishProducts()}
      >
        VOLTAR
      </button>
  </SWrapperDetails>
  );
}

export default CartDetails;