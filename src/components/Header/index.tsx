import Link from 'next/link';
import { useEffect } from 'react';
import { useAppData } from '../../context/hooks/useApp';
import { SCart, SHeader } from './styles';

const Header = ({}) => {
  const { qnt, totalItems } = useAppData();

  useEffect(() => {
    totalItems();
  }, [totalItems])

  return (
    <SHeader>
      <h1>We Movies</h1>
      <SCart>
        <div>
          <h3>Meu Carrinho</h3>
          <p>{`${qnt} ${ qnt === 1 ? 'item' : 'items' }`}</p>
        </div>
        <Link href="/cart">
          <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9519 10L16.1151 1.25335C15.9905 1.07675 15.8245 0.933372 15.6317 0.835754C15.4389 0.738135 15.2251 0.689245 15.0091 0.693354C14.5826 0.693354 14.1562 0.880021 13.903 1.26669L8.06628 10H1.68317C0.950251 10 0.350586 10.6 0.350586 11.3334C0.350586 11.4534 0.363912 11.5734 0.403889 11.6934L3.78867 24.0534C4.09516 25.1734 5.12125 26 6.34724 26H23.6709C24.8969 26 25.923 25.1734 26.2428 24.0534L29.6276 11.6934L29.6675 11.3334C29.6675 10.6 29.0679 10 28.335 10H21.9519ZM11.0113 10L15.0091 4.13335L19.0068 10H11.0113ZM15.0091 20.6667C13.5432 20.6667 12.3439 19.4667 12.3439 18C12.3439 16.5334 13.5432 15.3334 15.0091 15.3334C16.4749 15.3334 17.6742 16.5334 17.6742 18C17.6742 19.4667 16.4749 20.6667 15.0091 20.6667Z" fill="white"/>
          </svg>
        </Link>
      </SCart>
    </SHeader>
  );
}

export default Header;