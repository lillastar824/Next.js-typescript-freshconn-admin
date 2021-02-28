import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useAuth } from '../../ context/AuthContext'

const AppBar = styled.div`
  padding: 15px 0px;
  height: 5rem;
`
const Start = styled.div`
font-size: 1rem;
padding: 0rem 1rem;
`
const End = styled.div`
padding: 0rem 1rem;
`

export const TopBar = () => {
  const router = useRouter()
  const { user } = useAuth();
  return (
    <AppBar className="bg-gray-100 flex place-items-center">
      <Start className="font-semibold">{router.pathname.replace("/dashboard/", "").toLocaleUpperCase()}</Start>
      <End className="flex ml-auto place-items-center">
        <div>{user && user.email.split('@')[0]}</div>
        <img className="h-10 w-10 border-white border-2 rounded-full object-cover ml-4" src="/user.jpeg" />
      </End>
    </AppBar>
  )
}