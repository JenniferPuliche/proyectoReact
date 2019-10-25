import start from './circled-right-2.png';
import React, { Component } from 'react';

class Section extends Component  {
    
render (){ return (
        <div className="App">
            <h2>Start browsing</h2>
            <img src={start} className="imagenCentro" alt="start" />
        </div>
    )
    }
}


export default Section;