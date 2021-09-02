import Header from "./components/Header";
import Task from "./components/Tasks";
import { useState } from 'react'


const App = () => {
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
  return (
    <div className="container">
      <Header />
      <Task tasks={tasks}/>
    </div>
  );
}

export default App;

