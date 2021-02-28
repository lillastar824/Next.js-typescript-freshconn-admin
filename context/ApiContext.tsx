import React, { useState, useContext, createContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';

interface MarketData {
    id: string,
    name: string,
    open: number,
    close: number,
    logo: string,
    address: string,
}

interface FarmerData {
    id: string,
    name: string,
    email: string,
    phone: number,
    image: string,
    address: string,
}

interface UserData {
    id: string,
    name: string,
    email: string,
    phone: number,
    type: string,
    address: string,
}

interface Market extends Array<MarketData> { }
interface Farmer extends Array<FarmerData> { }
interface User extends Array<UserData> { }
interface AddMarket extends Function { }
interface DeleteMarket extends Function { }
interface Login extends Function { }

export const ApiContext = createContext<{ markets: Market | null, farmers: Farmer | null, users: User | null, addmarket: AddMarket, login: Login, deletemarket: DeleteMarket }>(null)

export function ApiProvider({ children }: any) {
    const [markets, setMarkets] = useState<Market | null>(null)
    const [farmers, setFarmers] = useState<Farmer | null>(null)
    const [users, setUsers] = useState<User | null>(null)
    const { authState } = useContext(AuthContext)

    const fetchMarket = async () => {
        await fetch("http://localhost:3000/api/markets", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET"
        }).then((res) => res.json())
            .then((res) => (setMarkets(res)))
    };

    const fetchFarmer = async () => {
        await fetch("http://localhost:3000/api/farmers", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        }).then((res) => res.json())
            .then((res) => (setFarmers(res)))
    };

    const fetchUser = async () => {
        await fetch("http://localhost:3000/api/users", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${authState}`,
            },
            method: "GET",
        }).then((res) => res.json())
            .then((res) => {
                setUsers(res.data)
            })
    };

    useEffect(() => {
        fetchMarket();
        fetchFarmer();
        fetchUser();
    }, [])

    return (
        <ApiContext.Provider value={{
            markets,
            farmers,
            users,
            addmarket: (marketData) => {
                const foo = JSON.stringify(marketData)
                fetch("http://localhost:3000/api/markets/addmarket", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: foo,
                }).then((res) => res.json())
                    .then((res) => console.log("market added"))
            },
            deletemarket: (marketId) => {
                const foo = JSON.stringify(marketId)
                fetch("http://localhost:3000/api/markets/deletemarket", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: foo,
                }).then((res) => res.json())
                    .then((res) => console.log("market Deleted"))
            },
            login: (credentials) => {
                const foo = JSON.stringify(credentials)
                fetch("http://localhost:3000/api/login", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: foo,
                }).then((res) => res.json())
                    .then((res) => console.log(res))
            }
        }}>{children}</ApiContext.Provider>
    );
}

export const useApi = () => {
    return useContext(ApiContext);
};
