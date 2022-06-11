import React, {useState} from 'react';
import './HomePageView.css';

import Form from '../components/Form';

export default function HomePageView(props) {

    const [determinedVehicleType, setDeterminedVehicleType] = useState();

    return (
        <div>
            <header>
                <h1>Validate Your Number Plate</h1>
            </header>
            Please enter license plate :
            <Form onResposeReceived={(data) => { setDeterminedVehicleType(data) }} />
            <label>{determinedVehicleType?.VehicleType}</label>
        </div>
    );
}