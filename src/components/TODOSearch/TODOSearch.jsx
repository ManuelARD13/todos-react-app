import React from 'react';

import "./TODOSearch.css";

function TODOSearch({ setUserInput }) {
 
  return (
    <div className='TODOSearch-container'>
      <input type="text" name="" placeholder='Search TODOs' onChange={(e) => setUserInput(e.target.value)} />
    </div>
  );
}

export default TODOSearch;