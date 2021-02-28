import React, { useContext } from 'react'
import Error from './FormError'
import styled from 'styled-components'

const TextAreaWrapper = styled.textarea`
  height: auto;
  padding: 7px 12px;
  border: 1px solid #e8e8e8;
  font-size: 14px;
  font-weight: 400;
  border-radius: 0;
  resize: none;
  width: 100%;
`
type Props = {
  props: any;
  error: string
}

const FormTextArea = ({ error, ...props }: Props) => {
  return (
    <div className="form-group">
      <TextAreaWrapper className="focusedInput" {...props} />
      <Error error={error} />
    </div>
  )
}

export default FormTextArea
