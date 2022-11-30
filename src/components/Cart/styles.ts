import styled from 'styled-components';

export const SWrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 550px;
  width: 950px;
  background-color: white;
  color: #2F2E41;
  border-radius: 4px;
  padding: 24px;
  margin: 0 auto;
  
  @media (max-width: 414px) {
    height: 100vh;
    width: 100vw;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }

  img {
    height: 300px;
  }

  button {
    background-color: #009EDD;
    height: 40px;
    width: 180px;
    border-radius: 4px;
    padding: 8px;
    color: white;
    border: none;
    cursor: pointer;
    line-height: 16px;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
  }
`;

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 950px;
  background-color: white;
  color: #2F2E41;
  border-radius: 4px;
  padding: 24px;
  margin: 0 auto;

  @media (max-width: 414px) {
    height: 100vh;
    width: 100vw;
  }
`;

export const SProduct = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  img {
    width: 89px;
    height: 114px;
  }

  p {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const SDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 414px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const SChanges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (max-width: 414px) {
    padding: 15px;
  }
`;

export const SInfos = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const SFinish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  button {
    background-color: #009EDD;
    height: 40px;
    width: 235px;
    border-radius: 4px;
    padding: 8px;
    color: white;
    border: none;
    cursor: pointer;
    line-height: 16px;
    text-align: center;
    font-weight: 700;
    font-size: 12px;

    @media (max-width: 414px) {
      width: 200px;
    }
  }


  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p {
      font-size: 14px;
      line-height: 19px;
    }

    h1 {
      font-weight: 700;
      font-size: 20px;
    }
  }
`;
