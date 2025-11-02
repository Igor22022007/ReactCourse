// onChange = obsługa zdarzenia używana głównie z
//        elementami: <input>, <textarea>, <select>, <radio>
//        Wywołuje funkcję za każdym razem gdy wartość inputa się zmienia

import React, { useState } from "react";


function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value); //Zmienia wartość przy zmianie onChange()
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <>
            <div>
                <input value={name} type="text" onChange={handleNameChange} />
                <p>Name: {name}</p>

                <input value={quantity} type="number" onChange={handleQuantityChange} />
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder="Enter comment" />
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Blik">Blik</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick Up" checked = {shipping === "Pick Up"} onChange={handleShippingChange}/>
                    Pick Up
                </label>
                 <label>
                    <input type="radio" value="Delivery" checked = {shipping === "Delivery"} onChange={handleShippingChange} />
                    Delivery
                </label>
                <p>Selected shipping: {shipping}</p>
            </div>
        </>
    );
}

export default MyComponent