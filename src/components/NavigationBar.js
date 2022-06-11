import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

export default function NavigationBar(props) {

    return (
        <div className='main-wrapper'>
            <div className='main-logo-wrapper'>
                <span className='main-logo-label'>VRA</span>
            </div>
            <div className='nav-links-wrapper'>
                <ul className='nav-bar-ul'>
                    <Link to='/Home' className='nav-router-link'>
                        <li>Home Page</li>
                    </Link>
                    <Link to='/VehicleCatalog' className='nav-router-link'>
                        <li>Vehicle Catalog</li>
                    </Link>
                    <Link to='/VehicleRegistration' className='nav-router-link'>
                        <li>Vehicle Registration</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}