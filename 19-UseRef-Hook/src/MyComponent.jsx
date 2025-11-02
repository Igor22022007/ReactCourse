// useState() = Przerenderowuje komponent gdy wartość stanu się zmienia.

// useRef() = "use Reference" Nie powoduje przerenderowań gdy jego wartość się zmienia.
// Gdy chcesz aby komponent "pamiętał" pewne informacje,
// ale nie chcesz aby te informacje wywoływały nowe renderowania.

// 1. Dostęp/Interakcja z elementami DOM
// 2. Obsługa Fokusa, Animacji i Przejść
// 3. Zarządzanie Timerami i Interwałami

import React, {useState, useEffect, useRef} from "react";

function MyComponent(){

    // let [number, setNumber] = useState(0); Zamiast useState można użyć useRef aby pozbyć się ciągłego renderowania komponentu

    const ref = useRef(0); //Przechwouje aktualną wartość, current = 0

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    function handleClick1(){
        //Zastosowanie ref
        // ref.current++;
        inputRef1.current.focus(); //Na klikniecie przycisku zaznaczy się input

        inputRef1.current.style.backgroundColor = "lightblue"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2(){
        inputRef2.current.focus()

        inputRef2.current.style.backgroundColor = "lightblue"
        inputRef1.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3(){
        inputRef3.current.focus();

        inputRef3.current.style.backgroundColor = "lightblue"
        inputRef2.current.style.backgroundColor = ""
        inputRef1.current.style.backgroundColor = ""
    }

    return(
        <>
            <button onClick={handleClick1}>
                Click me 1!
            </button><br></br>
            <input ref={inputRef1} /><br></br>

            <button onClick={handleClick2}>
                Click me 2!
            </button><br></br>
            <input ref={inputRef2} /><br></br>

            <button onClick={handleClick3}>
                Click me 3!
            </button><br></br>
            <input ref={inputRef3} />
        </>
    )
}

export default MyComponent