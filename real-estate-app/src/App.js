
import React from 'react';
import Featured from './components/featured/Featured'
import Best from './components/best/Best';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';



function App() {
  return (
    <div>
        <>
         <Navbar/>
         <Hero/>
         <Best/>
         <Featured/>
        </>
    </div>
  );
}

export default App;
