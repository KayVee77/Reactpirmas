import React from 'react';
// propsai
const TaskItem = ({ task, index, deleteTask, toggleTaskCompletion }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      {task.text}
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default TaskItem;