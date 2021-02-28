import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled from 'styled-components'


const DIV = styled.span`
  margin: 0rem 1rem;
`;

const MenuText = styled.span`
  @media (max-width: 1024px) {
    display: none
  }
`;

type Props = {
  children?: ReactNode;
  href: string;
  className: string;
  src: ReactNode
}


export const MenuItem = ({ children, href, className, src }: Props) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${router.pathname === href
          ? "text-gray-500 border-gray-400"
          : "text-gray-500 hover:text-gray-400 border-transparent"
          } ${className} p-4 border-l-2 focus:outline-none flex focus:text-gray-400 whitespace-no-wrap`}
      >
        <DIV>{src}</DIV>
        <MenuText>{children}</MenuText>
      </a>
    </Link>
  );
};

