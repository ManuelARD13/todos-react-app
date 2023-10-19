import React from 'react';

function TODOCounter({TODOs}) {

  const completedTODOs = TODOs.filter(todo => todo.isCompleted === true);

  return (
    <div>
      {
        TODOs.length === 0 
          ? <p>Create your first TODO!</p> 
          : completedTODOs.length !== TODOs.length 
            ? <p>You have {TODOs.length - completedTODOs.length} TODOs to finish!</p> 
            : <p>Congrats! You have completed all TODOs</p>
      }
    </div>
  );
}

export default TODOCounter;