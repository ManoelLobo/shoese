import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #f6f6fa;
  border-radius: 4px;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 30px;

    button {
      background: #045488;
      color: #f6f6fa;
      font-weight: bold;
      text-transform: uppercase;
      border: 0;
      border-radius: 4px;
      margin-top: auto;
      padding: 12px 20px;
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.05, '#045488')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    text-transform: uppercase;
    color: #9ba5b2;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #e4eeec;
  }

  img {
    height: 100px;
  }

  strong {
    color: #3e4d58;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #9ba5b2;
      border-radius: 4px;
      color: #616c6f;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: transparent;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #9ba5b2;
    font-weight: bold;
    text-transform: uppercase;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
