import React, { useContext } from 'react'
import styled from 'styled-components'
import Error from './FormError'

const UploadInputLabel = styled.div`
  width: 70%;
  margin: auto;
  font-weight: 300;
  font-size: 0.9rem;
  @media (min-width: 1400px) {
    width: 60%;
    font-size: 0.8rem;
  }
`
type Props = {
  error: string;
  onChange: any;
  props: any
}

const UploadInput = ({ error, onChange, ...props }: Props) => {
  return (
    <div className="form-group flex" >
      <UploadInputLabel> Upload Document </UploadInputLabel>
      <div>
        <input type="file" className="form-control focusedInput" onChange={onChange}{...props} />
        <Error error={error} />
      </div>
    </div>
  )
}

export default UploadInput
