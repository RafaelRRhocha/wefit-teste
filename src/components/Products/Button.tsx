import { FC, useEffect, useState } from 'react';
import { createCart, readCart } from '../../localstorage';
import { SButton } from './styles';

interface ButtonProps {
  id: number,
  title: string,
  price: number,
  image: string
}

const Button: FC<ButtonProps> = ({ id, title, price, image }) => {
  const [color, setColor] = useState(false);

  const setButton = () => {
    const cart = readCart();
    setColor(cart.some((e: any) => e.title === title));
  };

  useEffect(() => {
    setButton();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SButton
      type="button"
      onClick={() => {
        setColor(true);
        createCart({ id, title, price, image });
      }}
      style={{
        backgroundColor: !color ? '#009EDD' : '#039B00',
        cursor: !color ? 'pointer' : 'default'
      }}
    >
      <div>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.2667 5.00001H7.40004V3.30001H9.10004V2.16667H7.40004V0.466675H6.2667V2.16667H4.5667V3.30001H6.2667V5.00001ZM4.00004 10.1C3.3767 10.1 2.87237 10.61 2.87237 11.2333C2.87237 11.8567 3.3767 12.3667 4.00004 12.3667C4.62337 12.3667 5.13337 11.8567 5.13337 11.2333C5.13337 10.61 4.62337 10.1 4.00004 10.1ZM9.66671 10.1C9.04337 10.1 8.53904 10.61 8.53904 11.2333C8.53904 11.8567 9.04337 12.3667 9.66671 12.3667C10.29 12.3667 10.8 11.8567 10.8 11.2333C10.8 10.61 10.29 10.1 9.66671 10.1ZM4.09637 8.25834L4.11337 8.19034L4.62337 7.26668H8.84504C9.27004 7.26668 9.64404 7.03434 9.83671 6.68301L12.024 2.71068L11.038 2.16667H11.0324L10.409 3.30001L8.84504 6.13334H4.86704L4.79337 5.98034L3.52404 3.30001L2.9857 2.16667L2.45304 1.03334H0.600037V2.16667H1.73337L3.77337 6.46768L3.00837 7.85601C2.9177 8.01468 2.8667 8.20168 2.8667 8.40001C2.8667 9.02334 3.3767 9.53334 4.00004 9.53334H10.8V8.40001H4.23804C4.16437 8.40001 4.09637 8.33768 4.09637 8.25834Z" fill="white"/>
        </svg>
        <p>{` 0 `}</p>
      </div>
      {`${ !color ? 'Adicionar Ao Carrinho' : 'Item Adicionado'}`}
    </SButton>
  );
}

export default Button;