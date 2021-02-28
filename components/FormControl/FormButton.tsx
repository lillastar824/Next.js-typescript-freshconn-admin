import React from 'react'
import styled from 'styled-components'

const FormButtonWrapper = styled.button`
  color: white;
  font-weight: bold;
  font-size: 10px;
  min-width: 100px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  margin: 0;
  font-family: inherit;
  overflow: visible;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.75rem 0.75rem;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`

const FormButton = (props: any) => (
  <FormButtonWrapper  {...props} />
)
export default FormButton
