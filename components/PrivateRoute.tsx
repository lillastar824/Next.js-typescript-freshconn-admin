import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { AuthContext } from "../ context/AuthContext"
import DashLayout from "./DashLayout"

export default function PrivateRoute({ children }) {
    const { user, authState } = useContext(AuthContext)
    const router = useRouter()
    return (
        <div>
            { authState && user !== 'loading' && router.pathname !== '/login' ? (
                <DashLayout>
                    {children}
                </DashLayout>
            ) : router.pathname === '/login' ? (
                <>{children}</>
            ) : router.pathname !== '/login' && user === null ? (
                <div>Not Authorised</div>
            ) : (<div>...loading</div>)}
        </div>
    );
};