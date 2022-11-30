import styled from 'styled-components';

export const SHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  background-color: #2F2E41;
  height: 80px;

  @media (max-width: 414px) {
    h1 {
      font-size: 20px;
    }
    h3 {
      display: none;
    }
  }
`;

export const SCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;