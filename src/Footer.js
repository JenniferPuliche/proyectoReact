import React, { Component } from 'react';
import login from './LogIn';
import house from './homeIcon.png';

class Footer extends Component  {
    
    render (){ return (
            <div className="App">
                <h5>Want to build your own MYtinerary?</h5>
                <div>
                    <a href={login} className="links" >Log in</a>
                    <a href={login}>Create account</a>
                </div>
                <div>
                    <a href={login}>
                        <img src={house} className="App-footer" alt="house"/>
                    </a>
                </div>
            </div>
        )
        }
    }



export default Footer;