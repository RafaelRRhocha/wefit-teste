import styled from 'styled-components';

export const SWrapperDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  color: #2F2E41;
  width: 960px;
  height: 600px;
  margin: 0 auto;

  img {
    height: 350px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
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
`;

export const SChanges = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
      font-size: 24px;
    }
  }
`;
