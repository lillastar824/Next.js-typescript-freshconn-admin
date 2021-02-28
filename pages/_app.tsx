import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { AuthProvider } from '../ context/AuthContext'
import PrivateRoute from '../components/PrivateRoute'
import { ApiProvider } from '../ context/ApiContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PrivateRoute>
        <ApiProvider>
          <Component {...pageProps} />
        </ApiProvider>
      </PrivateRoute>
    </AuthProvider>
  )
}

export default MyApp
