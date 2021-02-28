import React, { useContext } from 'react'
import Error from './FormError'
import styled from 'styled-components'

const FormInputStyle = styled.div`
  align-self: center;
  margin-bottom: 21px;
  height: 4rem;
`;

const InputWrapper = styled.input`
  width: 100%;
  padding: 7px 12px;
  height: 42px;
  border: 1px solid #e8e8e8;
  font-size: 14px;
  font-weight: 400;
  border-radius: 0;
  display: block;
  width: 100%;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type=number] {
    -moz-appearance: textfield;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

type Props = {
  error: string;
  parentProps: any;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: any;
  required: any;
}

const FormInput = ({ error, id, type, name, placeholder, onChange, required, parentProps = {} }: Props) => {
  return (
    <FormInputStyle {...parentProps}>
      <InputWrapper type={type} name={name} placeholder={placeholder} onChange={onChange} required={required} className="focusedInput" id={id} />
      <Error error={error} />
    </FormInputStyle>
  )
}

export default FormInput
