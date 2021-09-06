import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from './components/Footer';
import About from './components/About';
const App = () => {
  const [showAddTask, setShowAddText] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }    

    getTasks();
  }, [])

  // fetch tasks
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();

    console.log(data)
    return data;
  }

  // fetch individual task
  const fetchIndividualTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();

    console.log(data)
    return data;
  }

  // functionality for deleting a task
  const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    
    setTasks(tasks.filter((taskInList) => taskInList.id !== id))
  }

  // functionality for toggling the reminder
  const toggleReminder = async (id) => {
    const taskToToggleReminder = await fetchIndividualTask(id);
    const updatedTask = { 
      ...taskToToggleReminder,
      reminder: !taskToToggleReminder.reminder
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask)
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder} : task));
  }

  // functionality for adding a task to a list
  const addTask = async (task) => {
    // const id = tasks.length + 1;
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task) 
    })

    const data = await res.json();

    setTasks([...tasks, data]);
  }

  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddText(!showAddTask)} showAdd={showAddTask}/>
      <Route path='/' exact render={(props) => (
        <>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? (
        <Task 
          tasks={tasks} 
          onToggle={toggleReminder} 
          onDelete={deleteTask}
        />
        ) : (
          "No Tasks in the Task List"
        )}
        </>
      )}/>
      <Route path='/about' component={About}/>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;

