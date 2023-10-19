import React from 'react';

import "./TODOCounter.css"

function TODOCounter({TODOs}) {

  const completedTODOs = TODOs.filter(todo => todo.isCompleted === true);

  return (
    <div className='TODOCounter-container'>
      {
        TODOs.length === 0 
          ? <p>Create your first TODO!</p> 
          : completedTODOs.length !== TODOs.length 
            ? <p>You have <span>{TODOs.length - completedTODOs.length}</span> TODOs to finish!</p> 
            : <p>Congrats! You have completed all TODOs</p>
      }
    </div>
  );
}

export default TODOCounter;