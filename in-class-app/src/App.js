import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentAccount from './StudentAccount';

let myStudent={
  name:"mary",
  grade:"90%"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <StudentAccount student={myStudent} fname='Mary' grade='99%'></StudentAccount>
        

      </header>
    </div>
  );
}

export default App;
   

