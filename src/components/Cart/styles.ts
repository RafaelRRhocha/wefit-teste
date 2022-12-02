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
    width: 100vw;
  }

  p {
    font-size: 18px;
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

export const SNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
      color: #999999;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
    }

  div {
    margin-right: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    width: 300px;
  }

  @media (max-width: 414px) {
    display: none;
  }
`;

export const SProduct = styled.div`
  display: flex;
  justify-content: space-between;
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

  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

export const SDetails = styled.div`
  color: #2F2E41;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  width: 300px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }

    h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
  }

  @media (max-width: 414px) {
    div {
      flex-direction: row;
      align-items: center;
      margin-top: -80px;
    }

    p {
      font-size: 14px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

export const SChanges = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  user-select: none;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #4a8ef3;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: none;
      color: #999999;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (max-width: 414px) {
    width: 170px;
    margin: -80px 0 40px 90px;

    section {
      span {
        display: block;
      }
    }
  }
`;

export const SInfos = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const SIcon = styled.div`
  cursor: pointer;

  @media (max-width: 414px) {
    margin: -115px 0 115px 320px;
  }

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
