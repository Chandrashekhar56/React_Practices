import { useState, React } from 'react'

export default function UseState(props) {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: props.color,
    });

    const updatecolor = () => {
        setCar(previousState => { return { ...previousState, color: "blue" }});
    }

    return (
        <div>
            <h1 style={{color:car.color}}>My {car.brand}</h1>
            <p style={{color:car.color}}>It is a {car.color} {car.model} from {car.year}.</p>
            <button type="button" onClick={updatecolor}>Blue</button>
        </div>
    )
}
