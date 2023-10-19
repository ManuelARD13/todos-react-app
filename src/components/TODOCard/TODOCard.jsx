import React from 'react';

function TODOCard({TODO, deleteTODO, completeTODO}) {
  return (
    <div>
      <p onClick={() => deleteTODO(TODO.text)}>
        X
      </p>
      <p className={TODO.isCompleted === true ? 'completed' : ''}>{TODO.text}</p>
      <p onClick={() => completeTODO(TODO.text)}>
        V
      </p>
    </div>
  );
}

export default TODOCard;