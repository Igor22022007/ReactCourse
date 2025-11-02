import { useState } from "react";


function MyComponent(){

    const[foods, setFoods] = useState(["Apple", "Orange", "Banana"]) //Domyślny state = Tablica z elementami

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value; //Pobieramy nowe jedzenie
        document.getElementById("foodInput").value = ""; //Resetujemy treść w polu input po kliknięciu przycisku

        setFoods(f => ([...f, newFood]));
    }

    function handleRemoveFood(index){

        setFoods(foods.filter((_, i) => i !== index)) // _ - ignoruj argument,   i  !== index - nowy ustawiony index jest nierówny stary index wtedy usuń
    }

    return(
        <>
            <div>
                <h2>List of food</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter food name" />
                <button onClick={handleAddFood}>Add food</button>
            </div>
        </>
    );
}

export default MyComponent