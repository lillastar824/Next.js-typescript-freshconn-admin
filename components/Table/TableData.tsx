import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

export default function TableData({ children }: Props) {
    return <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" children={children} />
}
