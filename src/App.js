import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

class App extends Component  {
  constructor(){
    super();
    
  }
  render (){ return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
    
  )
  }
}

export default App;