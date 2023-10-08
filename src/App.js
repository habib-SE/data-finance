import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newslater from './components/Newslater';
import Cards from './components/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newslater/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
