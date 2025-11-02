// useState() = Przerenderowuje komponent gdy wartość stanu się zmienia.

import MyComponent from "./MyComponent"

// useRef() = "use Reference" Nie powoduje przerenderowań gdy jego wartość się zmienia.
// Gdy chcesz aby komponent "pamiętał" pewne informacje,
// ale nie chcesz aby te informacje wywoływały nowe renderowania.

// 1. Dostęp/Interakcja z elementami DOM
// 2. Obsługa Fokusa, Animacji i Przejść
// 3. Zarządzanie Timerami i Interwałami


function App() {

  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App
