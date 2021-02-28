import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { Trash2 } from 'react-feather'
import styled from 'styled-components'
import { ApiContext } from '../../ context/ApiContext'
import { TableData, TableHeader } from '../../components/Table'
import { firebase } from "../../utils/firebase"

const Table = styled.table`
  width: -webkit-fill-available;
`
function getSize(size) {
  switch (size) {
    case 'M':
      return '500x500'
    case 'S':
      return '200x200'
    case 'L':
      return '700x700'
    default:
      console.log('wrong')
  }
}

function getImage(type, name, size, set) {
  let running = true
  firebase.storage()
    .ref()
    .child(
      `/${type}/thumbnails/${name
        .split('.')
        .slice(0, -1)
        .join('.')}_${getSize(size)}.${name
          .split('.')
          .pop()
          .toLowerCase()}`
    )
    .getDownloadURL()
    .then(url => {
      if (running) return fetch(url)
      else throw new Error('cancled')
    })
    .then(res => new Response(res.body).blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob)

      if (running) set(url)
    })
    .catch(e => {
      console.log('not loaded')
      set("/market.jpg")
    })
  return () => {
    running = false
  }
}

function Image({
  type,
  size = 'M',
  name,
  className = '',
}) {
  const [image, set] = useState(null)
  useEffect(() => {
    let cancel = () => { }
    if (!image && name) cancel = getImage(type, name, size, set)
    return () => {
      cancel()
    }
  }, [image, name, size, type])

  return <img src={image} alt="name" className={className} />

}
export default function Markets() {
  const { markets, deletemarket } = useContext(ApiContext)

  const Headers = [
    { id: 1, title: "Market" },
    { id: 2, title: "Address" },
    { id: 3, title: "Opens" },
    { id: 4, title: "Closes" },
    { id: 5, title: "Delete" },
  ]

  return (
    <>
      <Link href="/dashboard/addmarket"><button className="bg-red-300 px-4 py-2 rounded-md border-gray-800 border-2">Add a market</button></Link>
      <Table className="table-auto mt-10">
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
          {
            markets && markets.map(market => (
              <tr key={market.id}>
                <TableData>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <Image type="markets" name={market.logo} className="w-full h-full rounded-full" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {market.name}
                      </p>
                    </div>
                  </div>
                </TableData>
                <TableData>{market.address}</TableData>
                <TableData>{market.open.toFixed(2).replace(".", ":")}</TableData>
                <TableData>{market.close.toFixed(2).replace(".", ":")}</TableData>
                <TableData><Trash2 className="cursor-pointer" onClick={() => deletemarket(market.id)} /></TableData>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}