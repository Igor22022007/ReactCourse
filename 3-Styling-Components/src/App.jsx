// JAK STYLOWAĆ KOMPONENTY REACT ZA POMOCĄ CSS
// ---
// (nie uwzględniając zewnętrznych frameworków lub preprocesorów np. Tailwind)

// 1. ZEWNĘTRZNE - Czyli w tym przypadku pliku index.css (KONFLIKTOWY | MAŁE PROJEKTY)
// 2. MODUŁY - Czyli tworzenie pliku css przeznaczonego do konretnego elementu np. przycisku (ZAPOBIEGA KONFLIKTOM | DLA INDYWIDUALNYCH KOMPONENTÓW)
// 3. LINIOWE - Czyli tworzymy bezpośrednio w pliku gdzie znajduje się komponent w postaci obiektu JS (ZAPOBIEGA KONFLIKTOM | LEPSZE DLA MINIMALNYCH STYLÓW)
import Button from "./Button/Button.jsx"
import Button2 from "./Button2.jsx"

function App() {
  

  return (
    <>
    <Button/>
    <Button2/>
    </>
  )
}

export default App
