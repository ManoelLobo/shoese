import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #193034 url(${bg}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }

  #root {
    max-width: 960px;
    margin:0 auto;
    padding: 0 20px 50px;
  }

  button{
    cursor: pointer;
  }

  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;
