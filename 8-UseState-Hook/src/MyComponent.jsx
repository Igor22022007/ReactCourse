import React, {useState} from 'react'; //Importujemy z biblioteki react aby mieć dostęp do tej funkcji

function MyComponent (){

    //Użycie useState() - 1 wartość stanowa, 2 wartość zmieniająca
    const [name, setName] = useState("Guest"); // Guest wartość domyślna
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Igor"); //Zmienia się na to imię w Virtual DOM
    }

    const incrementAge = () => { //Funkcja inkrementująca o 1 na kliknięcie
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed); // To powoduje, że co każde kliknięcie status jest różny od poprzedniego
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )
}
export default MyComponent