// props = właściwości tylko do odczytu, które są współdzielone między komponentami.
//        Komponent rodzica może wysyłać dane do komponentu dziecka.
//        Czyli jeden komponent może mieć indywidualne wartości (np. w przypadku Card)
//        <Component klucz=wartość />

// propTypes = mechanizm który zapewnia, że przekazana wartość
//           jest poprawnym typem danych.
//           np. age: PropTypes.number

// Należy zainstalować bibliotekę - npm install prop-types


// defaultProps = domyślne wartości dla propsów w przypadku gdy nie są
//           przekazane z komponentu rodzica
//           name: "Guest"

import Student from "./Student.jsx"

function App() {

  return (
    // Key value czyli w tym przypadku name="Spongebob" jest przechowywana w propsie (w komponencie student - App.jsx jest dla niego parentem)
    // Słowem kluczowym może być losowa nazwa
    <>
      <Student name="Spongebob" age="30" isStudent={true}/> 
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student />
    </>  
  );
}


export default App
