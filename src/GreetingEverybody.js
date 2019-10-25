import React, { Component } from 'react';

class GreetingEverybody extends Component  {
  constructor(props){
    super(props);
    this.state = {
      alumnoNombre:this.props.nombre,
      show:true
    }
  }
  clickEnAlumno = ()=>{
    this.setState({"show":!this.state.show});
  }
  render (){ 
    if(this.state.show){  return (
        <div>
        Hola {this.state.alumnoNombre}    
        <input type="button" onClick={this.clickEnAlumno}/>
        {JSON.stringify(this.state.show)}
      </div> 
      )
    } else{
      {  return (
        <div>
     Chau! {this.state.alumnoNombre}    
        <input type="button" onClick={this.clickEnAlumno}/>
        {JSON.stringify(this.state.show)}
      </div> 
      )
    }
    }
  }
}

export default GreetingEverybody;