// updater function = Funkcja przekazywana jako argument do setState() zwykle
//    przykład: setYear(arrow function)
//    Pozwala na bezpieczne aktualizacje bazujące na poprzednim stanie (prevState)
//    Używana przy wielu aktualizacjach stanu i funkcjach asynchronicznych
//    Dobrą praktyką jest używanie funkcji updater


import { useState } from "react";

function MyComponent(){

    const [count, SetCount] = useState(0);

    const increment = () => {
        //Zastosowanie updater function (gdy wykorzystamy ją dwukrotnie zinkrementuje dwukrotnie w przeciwieństwie do current State):
        SetCount(prevCount => prevCount + 1);
        SetCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        //Parametr "prevCount" jest traktowany jako previous State
        SetCount(prevCount => prevCount - 1);
        SetCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        SetCount(0);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default MyComponent