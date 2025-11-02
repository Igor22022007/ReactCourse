//3.Liniowe

function Button2(){
    
    //Tworzymy style w JS
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        margin: "0px 10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <button style={styles}>Liniowe</button> //Wprowadzamy style z obiektu
    )
}

export default Button2