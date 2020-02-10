import React from 'react';
import logo from './logo.svg';
import './App.css';
import  SigninForm  from './SigninForm';

function App() {
  return (
    <div className="row center-block" id="Home">
    <div className="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
      <div className="sign-in-wrapper text-center">
      
        <h4>Learning Resource for Students</h4>
        <SigninForm />
      </div>
    </div>
  </div>
);
  
}

export default App;
