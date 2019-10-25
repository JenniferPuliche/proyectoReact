import logo from './MYtineraryLogo.png';
import React, { Component } from 'react';


class Header extends Component  {
    constructor(){
      super();
      
}

render (){ return (
    <div>
        <header className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
        </header>
    
    </div>
    )
    }
}






export default Header;