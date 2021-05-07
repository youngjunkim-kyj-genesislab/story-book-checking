import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  const TASK_ARCHIVED = 'TASK_ARCHIVED';
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input type='checkbox' defaultChecked={state === TASK_ARCHIVED} disabled name='checked' />
        <span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
      </label>
      <div className='title'>
        <input
          type='text'
          value={title}
          readOnly
          placeholder='Input title'
          style={{ backgroundColor: '#bbbddd' }}
        />
      </div>
      <div className='actions' onClick={(event) => event.stopPropagation()}>
        {state !== TASK_ARCHIVED && (
          <a onClick={() => onPinTask(id)}>
            <span className='icon-star' />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;

Task.prototype = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
