// App.js
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Special from './components/Special';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Main />
        <SpecialRoute />
      </div>
    </Router>
  );
}

function SpecialRoute() {
  const location = useLocation();
  
  // Check if the current location is not the root path
  if (location.pathname !== '/') {
    return null; // Don't render <Special /> component
  }

  // Render <Special /> component for the root path
  return <Special />;
}

export default App;
