import React, { useContext } from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const RadioButtonContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  & > div {
    margin-top: 10px;
    width: 50%;

    @media (max-width: 1024px) {
      width: auto;
    }
  }

  & > span {
    margin-top: 6px;
  }
`

type Props = {
  onChange: any;
  name: string
}

const RadioButton = ({ onChange, name }: Props) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    const event = {
      target: {
        name,
        value: !checked
      }
    }
    onChange(event)
    setChecked(!checked)
  }
  return (
    <RadioButtonContainer>
      <div>Keep it Private</div>
      <input type="radio" checked={checked} onChange={handleChange} />
    </RadioButtonContainer>
  )
}

export default RadioButton
