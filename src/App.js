import React from 'react';

import './App.css'; 
import Sidebar from './components/Sidebar/Sidebar';
import MainComponent from './components/MainComponent/MainComponent';

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="main-container">
        <MainComponent />
      </div>
    </div>
  );
};

export default App;



