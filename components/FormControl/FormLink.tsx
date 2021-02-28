import React from 'react'
import styled from 'styled-components'
import Link from "next/link"

const linkStyle = `
  font-size: 10px;
  font-weight: 700;
  color: #ffc002;
  cursor: pointer;
`

const CustomLink = styled(Link) <Props>`
  ${linkStyle}
`

type Props = {
  href: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: any
}

export default function FormLink({ href, onClick, children, ...props }: Props) {
  return <CustomLink href={href} onClick={onClick} {...props}>{children}</CustomLink>
}
