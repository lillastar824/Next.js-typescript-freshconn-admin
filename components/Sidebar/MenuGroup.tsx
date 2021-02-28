import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function MenuGroup({ children }: Props) {
  return <div className="flex flex-col pt-6 overflow-x-auto scrollbar-none h-screen" children={children} />
}
