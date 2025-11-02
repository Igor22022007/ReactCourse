
function Button (){

    const handleClick = (e) => {
        e.target.textContent = "OUCH"; //Zwrócony event object
    }

    // const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    return(
        // <button onClick={() => handleClick2("IroX")}>Click me</button> - Jeżeli występuje parametr funkcję handleClick zamieszczamy w tzw. function expression aby poprawnie działało
        <button onDoubleClick={(e) => handleClick(e)}>Click me</button> // handleClick(e) = event object
    )
}

export default Button