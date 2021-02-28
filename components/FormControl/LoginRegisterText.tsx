import React from 'react'
import FormLink from './FormLink'

type Props = {
  registerHandler: React.MouseEventHandler<HTMLButtonElement>;
  isUserLogin: any;
  text: string;
  linkText: string;
  type: string
}

const LoginRegisterText = ({ registerHandler, isUserLogin, text, linkText, type }: Props) => {
  if (isUserLogin)
    return null
  return (
    <div className="flex place-content-center">
      <div className="mt-4 text-xs text-center">
        <label className="font-hairline mr-2">{text}</label>
        <FormLink href="ab" onClick={registerHandler}>
          {linkText || `Create an ${type} Account`}
        </FormLink>
      </div>
    </div>
  )
}

export default LoginRegisterText