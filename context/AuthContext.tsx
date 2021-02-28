import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import { firebase as firebaseClient } from '../utils/firebase';

export const AuthContext = createContext<{ user: firebaseClient.User | string | null, authState: Boolean }>({
    user: null,
    authState: false,
});

export function AuthProvider({ children }: any) {
    const [user, set] = useState<firebaseClient.User | null | string>('loading');
    const [authState, setAuthState] = useState(false)
    useEffect(() => {
        if (!user) {
            setAuthState(false)
        }
    })
    useEffect(() => {
        return firebaseClient.auth().onIdTokenChanged(async (user) => {
            console.log(`auth changed`);
            console.log(user ? user.uid : 'NO USER');
            if (!user) {
                set(null);
                setAuthState(false)
                nookies.set(undefined, 'token', '', {});
                return;
            }
            const token = await user.getIdToken();
            set(user);
            setAuthState(true)
            nookies.set(undefined, 'token', token, {});
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, authState }}>{children}</AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
