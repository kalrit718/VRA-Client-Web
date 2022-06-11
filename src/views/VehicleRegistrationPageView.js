import React from 'react';
import './VehicleRegistrationPageView.css';

import Registration from '../components/Registration';

export default function VehicleRegistrationPageView(props) {

    return (
        <div>
            <header>
                <h1>Register Vehicle</h1>
            </header>
            <Registration />
        </div>
    );
}