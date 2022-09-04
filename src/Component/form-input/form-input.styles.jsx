import styled, { css } from 'styled-components'

const mainColor = 'grey'
const subColor = 'black'

const shrinkLabelStyles = css`
  top: -17px;
  font-size: 12px;
  color: ${subColor};
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`
export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 20px;
  padding: 10px 10px 10px 10px;
  border: none;
  border-radius: 15px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`

export const Group = styled.div`
  position: relative;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`
