import { useState } from 'react';
import './App.css';

import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Socials from './components/socials/socials';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Socials />
      <Footer/>
    </div>
  )
}

export default App
