import { List } from 'react-feather'
import styled from 'styled-components'
import { TableData, TableHeader } from '../../components/Table'

const Table = styled.table`
  width: -webkit-fill-available;
`
const Headers = [
  { id: 1, title: "User" },
  { id: 2, title: "Role" },
  { id: 3, title: "Created at" },
  { id: 4, title: "Status" },
]
const orders = [
  { id: 1, name: "Vera Carprnter", role: "Admin", created: "Jan 21, 2020", status: "active", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" },
  { id: 2, name: "Blake Bowman", role: "Admin", created: "Jan 01, 2020", status: "active", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" },
  { id: 3, name: "Dana Moore", role: "Editor", created: "Jan 10, 2020", status: "suspended", image: "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" },
  { id: 4, name: "Alonzo Cox", role: "Admin", created: "Jan 18, 2020", status: "inactive", image: "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80" },
  { id: 5, name: "Vera Carprnter", role: "Admin", created: "Jan 21, 2020", status: "active", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" },
  { id: 6, name: "Blake Bowman", role: "Admin", created: "Jan 01, 2020", status: "active", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" },
  { id: 7, name: "Dana Moore", role: "Editor", created: "Jan 10, 2020", status: "suspended", image: "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" },
  { id: 8, name: "Alonzo Cox", role: "Admin", created: "Jan 18, 2020", status: "inactive", image: "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80" }
]
export default function Orders() {
  return (
    <Table className="table-auto mt-10 leading-normal">
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
        {orders.map(i => (
          <tr key={i.id}>
            <TableData>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                  <img className="w-full h-full rounded-full"
                    src={i.image}
                    alt="" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {i.name}
                  </p>
                </div>
              </div>
            </TableData>
            <TableData>
              <p className="text-gray-900 whitespace-no-wrap">{i.role}</p>
            </TableData>
            <TableData>
              <p className="text-gray-900 whitespace-no-wrap">{i.created}</p>
            </TableData>
            <TableData>
              <span
                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden
                  className={`${i.status === "active"
                    ? "bg-green-200"
                    : i.status === "suspended" ? "bg-orange-200" : "bg-red-200"
                    } absolute inset-0 opacity-50 rounded-full`}></span>
                <span className="relative">{i.status}</span>
              </span>
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}