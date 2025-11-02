// updater function = Funkcja przekazywana jako argument do setState() zwykle
//    przykład: setYear(arrow function)
//    Pozwala na bezpieczne aktualizacje bazujące na poprzednim stanie
//    Używana przy wielu aktualizacjach stanu i funkcjach asynchronicznych
//    Dobrą praktyką jest używanie funkcji updater

import MyComponent from "./MyComponent"

function App() {


  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App
