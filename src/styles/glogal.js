import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing:border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background-image: linear-gradient(to right top, #904579, #9f4271, #ad3f67, #b73e5a, #bf414c, #c64b4b, #cc5649, #d26048, #dd7056, #e97f64, #f48f73, #ff9e82);
    -webkit-font-smoothing: antialised;
  }

  body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer
  }
`
