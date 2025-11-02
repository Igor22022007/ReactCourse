
import { useState, createContext} from 'react'
import ComponentB from './ComponentB.jsx'

export const UserContext = createContext(); //Eksportujemy wartość UserContext do innych komponentów

function ComponentA(){

    const [user, setUser] = useState("IroXCode");

    return(
        <>
            <div className="box">
                <h1>ComponentA</h1>
                <h2>{`Hello ${user}`}</h2>
                {/* Potrzebny kod do przekazywania informacji do następnych komponentów  */}
                <UserContext.Provider value={user}>
                    <ComponentB user={user}/>
                </UserContext.Provider>
            </div>
        </>
    )
}

export default ComponentA