import { useContext } from 'react'
import styled from 'styled-components'
import { ApiContext } from '../../ context/ApiContext'
import { TableData, TableHeader } from '../../components/Table'

const Table = styled.table`
  width: -webkit-fill-available;
`

const Headers = [
  { id: 1, title: "Image" },
  { id: 2, title: "Name" },
  { id: 3, title: "Address" },
  { id: 4, title: "Phone" },
  { id: 5, title: "Email" }
]

export default function Farmers() {
  const { farmers } = useContext(ApiContext)
  console.log(farmers)
  return (
    <Table className="table-auto mt-10 leading-normal overflow-auto">
      <thead>
        <tr>
          {
            Headers.map(i => (
              <TableHeader key={i.id} children={i.title} />
            ))
          }
        </tr>
      </thead>
      <tbody>
        {farmers && farmers.map(farmer => (
          <tr key={farmer.id}>
            <TableData>{farmer.image}</TableData>
            <TableData>{farmer.name}</TableData>
            <TableData>{farmer.address}</TableData>
            <TableData>{farmer.phone}</TableData>
            <TableData>{farmer.email}</TableData>
          </tr>
        ))
        }
      </tbody>
    </Table>
  )
}