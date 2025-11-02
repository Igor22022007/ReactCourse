import PropTypes from 'prop-types'

function Student(props){ //Tworzymy parametr props

    //Domyślna wartość zamiast DefaultProps bo nie działa!
     const { 
        name = "Guest", 
        age = 0, 
        isStudent = false 
    } = props;
    
    return(
        //Wywołanie poszczególnych key value (z obiektu - App.jsx) w tej funkcji
        //W wartości typu Bolean nie wyświetla więc najlepiej zastosować ternary operator
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// Tworzenie Prop types (Program upewnia się że wartość jest ustalonym typem danych) - Dobre do debugowania
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student