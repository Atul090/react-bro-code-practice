import React, {useState} from "react";

function MyComponent(){

    const [name,setName] = useState("");
    const [shipping,setShippment] = useState("Pick Up")

    function handleNameChange(event){
        setName(event.target.value)
        console.log(event.target.value)
    }

    function handleShippingChange(event){
        setShippment(event.target.value);        
    }

    return (
        <>
        <div>
            {/* <input value={name} onChnage={handleNameChange}/> */}
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <label>
            <input type="radio" value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange}
            />
            Pick Up
            </label>
            <label>
            <input type="radio" value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
            />
            Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
        </>
    )

}

export default MyComponent