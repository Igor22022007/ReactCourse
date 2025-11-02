//W ten sposób przy pomocy Props sprawiamy że komponent List jest wielokrotnego użytku na róznych wartościach
function List(props){

    //Domyślne props
    const {
        items = [], // Pusta tablica
        category = "Category",
    } = props;

    // const category = props.category;
    const itemList = items; //Przypisanie danego Array of Object z App.jsx

    const listItems = itemList.map(item =>   <li key={item.id}>
                                            {item.name}:
                                            <b>{item.calories}</b></li>)

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}

export default List


// W TYM KOMPONENCIE

// Tworzymy komponent listy owoców
 
    //Array of objects

    // const fruits = [{id: 1, name: "apple", calories: 95},
    //                 {id: 2, name: "orange", calories: 45},
    //                 {id: 3, name: "banana", calories: 105}, 
    //                 {id: 4, name: "coconut", calories: 159}, 
    //                 {id: 5, name: "pineapple", calories: 37}];


    //Sortowanie zgodnie z alfabetem                           // fruits.sort((a, b) => a.name.localeCompare(b.name));
    
    //Sortowanie zgodnie z odwrotnym alfabetem                 // fruits.sort((a, b) => b.name.localeCompare(a.name));

    //Sortowanie od nawiekszej do najmniejszej ilości kalorii  // fruits.sort((a, b) => a.calories - b.calories);


    //Znalezienie owoców poniżej 100 kcal

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const lowCalItems = lowCalFruits.map(lowCalfruit => <li key={lowCalfruit.id}>
    //                                                     {lowCalfruit.name}:
    //                                                     <b>{lowCalfruit.calories}</b></li>)



    // Umieszczamy elementy z tablicy do znacznika listy li
    //Map zwraca każdy (pojedynczy) element z array. Pojedynczym elementem jest parametr fruit
