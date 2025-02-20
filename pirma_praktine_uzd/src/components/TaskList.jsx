import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;