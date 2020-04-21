import { createGlobalStyle, keyframes } from 'styled-components'

export const rotate = keyframes`
from {
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    box-sizing:border-box;
  }

  html, body, #root{
    min-height: 100%;
    color: #222;
  }

  body{
    background:black;
    -webkit-font-smoothing: antialised;
  }

  body, input, button{

    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer
  }
`
