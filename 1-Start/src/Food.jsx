
function Food (){
    //Tu może być czysty JS
    const food1 = "Pizza";
    const food2 = "Sushi";

    //Aby wywołać JS w return trzeba umieścić w {}
    return(
        <ul>
            <li>Burger</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food