import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import NavigationBar from './components/NavigationBar';
import HomePageView from './views/HomePageView';
import VehicleCatalogPageView from './views/VehicleCatalogPageView';
import VehicleRegistrationPageView from './views/VehicleRegistrationPageView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePageView />} />
          <Route path="/Home" element={<HomePageView />} />
          <Route path="/VehicleCatalog" element={<VehicleCatalogPageView />} />
          <Route path="/VehicleRegistration" element={<VehicleRegistrationPageView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
