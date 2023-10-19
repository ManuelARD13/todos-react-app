import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

import "./TODOCard.css";

function TODOCard({TODO, deleteTODO, completeTODO}) {
  return (
    <div className='TODO-card'>
      <div className='XCircle-icon-container' onClick={() => deleteTODO(TODO.text)}>
        <XCircleIcon className='XCircle-icon' />
      </div>
      <p className={TODO.isCompleted === true ? 'completed' : ''}>{TODO.text}</p>
      <div className='CheckCircle-icon-container' onClick={() => completeTODO(TODO.text)}>
        <CheckCircleIcon />
      </div>
    </div>
  );
}

export default TODOCard;