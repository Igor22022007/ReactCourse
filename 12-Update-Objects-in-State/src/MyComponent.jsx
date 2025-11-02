import { useState } from "react";

function MyComponent(){


    //Wprowadzamy objekt jako domyślną wartość useState
    const [car, setCar] = useState({year: 2014, 
                                    make: "Volkswagen", 
                                    model: "Touran"});


    function handleYearChange(event){
        setCar({...car, year: event.target.value}); // ...car - spread operator służy do wywołania całego obiektu car, pozostawiając wartości w tym obiekcie przy zmiany jednej z wartości: (year)
    }   

    //Przerobienie na updater function (Bezpieczne zmiany) - dajemy dodatkowe nawiasy w arrow function jeśli jest obiekt
    function handleYearChange2(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    
    function handleMakeChange(event){
      setCar(c => ({...c, make: event.target.value}));  
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }   
       

    return(
        <>
            <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                {/* Przechowuje wartość year z obiektu car */}
                <input type="number" value={car.year} onChange={handleYearChange2}/> <br/>
                <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
                <input type="text" value={car.model} onChange={handleModelChange}/> <br/> 
            </div>
        </>
    );
}   

export default MyComponent