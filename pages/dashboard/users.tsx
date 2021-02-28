import { useContext } from 'react'
import styled from 'styled-components'
import { ApiContext } from '../../ context/ApiContext'
import { TableData, TableHeader } from '../../components/Table'

const Table = styled.table`
  width: -webkit-fill-available;
`
const Headers = [
  { id: 1, title: "User" },
  { id: 2, title: "Address" },
  { id: 3, title: "Phone" },
  { id: 4, title: "Email" },
  { id: 5, title: "Type" }
]

export default function Users() {
  const { users } = useContext(ApiContext)

  return (
    <Table className="table-auto mt-10">
      <thead>
        <tr className="text-left">
          {
            Headers.map(i => (
              <TableHeader key={i.id} children={i.title} />
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          users && users.map(user => (
            <tr key={user.id}>
              <TableData>{user.name}</TableData>
              <TableData>{user.address}</TableData>
              <TableData>{user.phone}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.type}</TableData>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}