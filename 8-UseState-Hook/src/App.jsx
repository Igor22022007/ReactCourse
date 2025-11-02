// React hook = Specjalna funkcja która pozwala komponentom funkcyjnym
//    używać funkcjonalności React bez pisania komponentów klasowych (React v16.8)
//    (useState, useEffect, useContext, useReducer, useRef, i więcej...)

// useState() = Hook React który pozwala na stworzenie zmiennej stanowej
//    ORAZ funkcji setter do aktualizacji jej wartości w Virtual DOM - czyli to co widzimy na stronie.
//    [name, setName]


import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"

function App() {


  return (
    <>
      <MyComponent/>
      <Counter/>
    </>
  )
}

export default App
