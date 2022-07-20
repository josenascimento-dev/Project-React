
import React from 'react';
import Featured from './components/featured/Featured'
import Best from './components/best/Best';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Helmet from 'react-helmet';


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>StarBooks</title>
        <link rel="canonical" href="http:mysite.com/example"/>
        <meta name="description" content="Bookstore"/>
      </Helmet>
        <>
         <Navbar/>
         <Hero/>
         <Best/>
         <Featured/>
         <Footer/>
        </>
    </div>
  );
}

export default App;
