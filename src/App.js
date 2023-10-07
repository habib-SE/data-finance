import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newslater from './components/Newslater';
import Cards from './components/Cards';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newslater/>
      <Cards/>
    </div>
  );
}

export default App;
