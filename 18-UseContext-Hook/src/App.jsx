// useContext() = Hook React który pozwala na udostępnianie wartości
//              pomiędzy wieloma poziomami komponentów
//              bez przekazywania propsów przez każdy poziom


// KOMPONENT PROVIDER (DOSTAWCY)
// 1. import {createContext} from 'react';

// 2. export const MyContext = createContext();

// 3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider>


// KOMPONENTY CONSUMER (KONSUMENTA)
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);


import ComponentA from "./ComponentA.jsx"

function App() {


  return (
    <>
      <ComponentA/>
    </>
  )
}

export default App
