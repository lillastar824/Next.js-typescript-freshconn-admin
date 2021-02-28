import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useAuth } from '../../ context/AuthContext'

const Card = styled.div`
  padding: 15px 0px;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.div`
  font-size: 1rem;
  padding: 0rem 1rem;
`
const Value = styled.div`
  padding: 0rem 1rem;
  font-size: 2rem
`

export const DashCard = ({ title, value }) => {
  const router = useRouter()
  return (
    <Card className=" text-gray-500 border-gray-500 hover:text-blue-500 hover:border-blue-500 mb-8 border-2 rounded-lg h-32 w-56 flex flex-col">
      <Title className="font-semibold">{title}</Title>
      <Value className="font-bold">{value}</Value>
    </Card>
  )
}