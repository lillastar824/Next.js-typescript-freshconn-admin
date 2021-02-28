import React from 'react'
import styled, { css } from 'styled-components'
import CheckboxIcon from './CheckboxIcon'

type Props = {
  check: boolean;
  handleCheckBox: React.MouseEventHandler<HTMLButtonElement>
}

const RememberMeWrapper = styled.label`
  margin-bottom: 0;
  margin-top: 5px;
  display: inline-block
`

const RememberMe = ({ check, handleCheckBox }: Props) => (
  <RememberMeWrapper
    htmlFor="rem"
    className="fw-normal font-lato"
  >
    <CheckboxIcon isChecked={check || false} onClick={handleCheckBox} />
    <span className="fake-label">Remember Me</span>
  </RememberMeWrapper>
)

export default RememberMe
