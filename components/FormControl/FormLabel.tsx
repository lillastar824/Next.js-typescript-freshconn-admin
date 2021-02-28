import React from "react";
import styled from "styled-components";

const FormLabelStyle = styled.div`
  align-self: center;
  margin-bottom: 21px;
`;

type Props = {
  text: string;
  otherProps: any
}

export default function FormLabel({ text, ...otherProps }: Props) {
  return <FormLabelStyle {...otherProps}>{text}</FormLabelStyle>;
}
