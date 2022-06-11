import React, { useState } from 'react';
import './Registration.css';

var setMyEnteredVehicleNumber;
var myEnteredVehicleNumber;
var setMyEnteredVehicleManufacturer;
var myEnteredVehicleManufacturer;
var setMyEnteredVehicleModel;
var myEnteredVehicleModel;

export default function Registration(props) {

    const [enteredVehicleNumber, setEnteredVehicleNumber] = useState();
    setMyEnteredVehicleNumber = setEnteredVehicleNumber;
    myEnteredVehicleNumber = enteredVehicleNumber;

    const [enteredVehicleManufacturer, setEnteredVehicleManufacturer] = useState();
    setMyEnteredVehicleManufacturer = setEnteredVehicleManufacturer;
    myEnteredVehicleManufacturer = enteredVehicleManufacturer;

    const [enteredVehicleModel, setEnteredVehicleModel] = useState();
    setMyEnteredVehicleModel = setEnteredVehicleModel;
    myEnteredVehicleModel = enteredVehicleModel;

    return (
        <form>
            <div>
                <input id='vehicle-numberplate-field' onChange={onChangeVehicleNumber} type='text' placeholder="Vehicle Number" />
                <input id="vehicle-manufacture-field" onChange={onChangeVehicleManufacturer} type='text' placeholder='Vehicle Manufacturer' />
                <input id="vehicle-model-field" onChange={onChangeVehicleModel} type='text' placeholder='Vehicle Model' />
            </div>
            <br />
            <button onClick={onRegisterButtonClick} id="registerbtn" className="register-button" type="button">Register</button>
        </form>
    );
}

async function onRegisterButtonClick(e) {
    const newVehicleRegistration = {
        VehicleNumberPlate: myEnteredVehicleNumber,
        VehicleManufacturer: myEnteredVehicleManufacturer,
        VehicleModelName: myEnteredVehicleModel
    }

    await fetch(`http://localhost:3001/postvehicles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVehicleRegistration)
    })
        .then(response => response.json())
        .then(data => alert(`${data.VehicleManufacturer} ${data.VehicleModelName} Vehicle Successfully Registered!`));
}

function onChangeVehicleNumber(e) {
    setMyEnteredVehicleNumber(e.target.value);
}

function onChangeVehicleManufacturer(e) {
    setMyEnteredVehicleManufacturer(e.target.value);
}

function onChangeVehicleModel(e) {
    setMyEnteredVehicleModel(e.target.value);
}