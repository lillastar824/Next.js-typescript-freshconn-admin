import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../ context/AuthContext';

const Title = styled.h1`
  font-size: 3rem;
`

export default function Dashboard(props: any) {
  const { user } = useAuth();
  return (
    <div>
      <p>{props.message}</p>
      <Title className="text-orange-600">Welcome to Freshconn Dashboard</Title>
      <Title className="text-green-600">{`User Email: ${user ? user.email : 'no user signed in'}`}</Title>
    </div>
  )
}