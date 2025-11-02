// useEffect() = Hook React który mówi React WYKONAJ KOD KIEDY (wybierz jedno):
// Ten komponent się przerenderuje
// Ten komponent zamontuje
// Stan wartości się zmieni

// useEffect(funkcja, [zależności])

// 1. useEffect(() => {})             // Uruchamia się po każdym przerenderowaniu
// 2. useEffect(() => {}, [])        // Uruchamia się tylko przy montowaniu
// 3. useEffect(() => {}, [wartość]) // Uruchamia się przy montowaniu + gdy wartość się zmienia

// ZASTOSOWANIA
// #1 Event Listenery (nasłuchiwacze zdarzeń)
// #2 Manipulacja DOM
// #3 Subskrypcje (aktualizacje w czasie rzeczywistym)
// #4 Pobieranie danych z API
// #5 Sprzątanie gdy komponent się odmontowuje

import React, {useState, useEffect} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    //Chcemy aby co każde kliknięcie w przycisk tytuł na karcie strony się zmieniał wraz z rosnącą liczbą
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        
    }, [count, color]); // Za pomocą tej tablicy (dependencies) kontrolujemy co ma się zmieniać

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default MyComponent