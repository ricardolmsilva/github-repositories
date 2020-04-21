import styled, { css } from 'styled-components'

import { rotate } from '../../styles/glogal'

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: black;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
  }

  svg {
    color: white;
    ${({ loading }) =>
      loading &&
      css`
        animation: ${rotate} 1s linear infinite;
      `}
  }
`

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    margin: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }
    span,
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: black;
    }

    svg {
      font-size: 13px;

      opacity: 0.7;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }

    span svg {
      color: red;
      margin-right: 10px;
    }
  }
`
