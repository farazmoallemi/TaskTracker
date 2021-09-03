import { useState } from 'react'

import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddText] = useState(false);
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Finish Online Profiles',
    day: 'September 2nd at 8pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Finish React Traversy Media Crash Course',
    day: 'September 2nd at 11:59pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Interview with Brian the CEO',
    day: 'September 8th at 12:30pm',
    reminder: true
  }
])

  // functionality for deleting a task
  const deleteTask = (id) => {
    console.log('inside delete method')
    setTasks(tasks.filter((taskInList) => taskInList.id !== id))
  }

  // functionality for toggling the reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task));
  }

  // functionality for adding a task to a list
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddText(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Task tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
      : "No Tasks in the Task List"}
    </div>
  );
}

export default App;

