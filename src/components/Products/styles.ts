import styled from 'styled-components';

export const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  width: 100%;
  gap: 16px;
  margin: 0 auto;
  padding: 30px;
`

export const SProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  color: black;
  width: 310px;
  height: 325px;
  border-radius: 4px;

  img {
    width: 147px;
    height: 188px;
  }

  p {
    font-size: 18px;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #009EDD;
    height: 40px;
    width: 288px;
    border-radius: 4px;
    padding: 8px;
    color: white;
    border: none;
    cursor: pointer;
    line-height: 16px;
    text-align: center;
    font-weight: 700;
    font-size: 12px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
    }
  }
`