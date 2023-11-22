import React, { createContext, useState } from "react";


export const DataContext = createContext();


export function DataProvider({ children }) {

    const [DataAuth, setDataAuth] = useState();//La data del login
    const [islog, setislog] = useState(false);

    async function Auth(user, passwordpar) {

        const identity = user;
        const password = passwordpar;
        const userobj = {
            identity,
            password
        }
        const url = 'http://127.0.0.1:8090/api/collections/users/auth-with-password'
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Acept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userobj),
            });
            const data = await res.json();
            setDataAuth(data);
            return data;
        } catch (error) {
            console.log(error);
        }

    }


    

    return (
        <DataContext.Provider value={{
            DataAuth, Auth,setislog,islog
        }}>
            {children}
        </DataContext.Provider>
    )

}



