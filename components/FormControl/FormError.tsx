import React from 'react'
import styled from 'styled-components'

const ErrorWrapper = styled.p`
  margin: 8px 0px;
  font-size: 14px;
  color: red;
  font-family: 'lato';
`

type Props = {
  error: string
}

export default function FormError({ error }: Props) {
  if (!error) return null
  return <ErrorWrapper>{error}</ErrorWrapper>
}
