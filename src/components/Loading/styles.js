import styled, { css } from 'styled-components'

import { rotate } from '../../styles/glogal'

const Container = styled.span`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 100vh;

  svg {
    color: white;

    ${({ loading }) =>
      loading &&
      css`
        animation: ${rotate} 1s linear infinite;
      `}
  }
`

export default Container
