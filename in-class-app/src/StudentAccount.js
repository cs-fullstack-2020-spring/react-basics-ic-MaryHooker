import React from 'react';

import './App.css';

function StudentAccount(prop) {
  return (
    <div>
      <header className='student'>
        <p>Hello {prop.fname}</p>
        <p>Your grade is {prop.grade}</p>
        <p>Hello again {prop.student.name}</p>
        <p>Your same grade is {prop.student.grade}</p>
      </header>
    </div>
  );
}

export default StudentAccount;
