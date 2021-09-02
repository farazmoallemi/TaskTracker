import Task from "./Task"

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((taskObject) =>
        <Task key={taskObject.id} task={taskObject}/>
      )}
    </div>
  )
}

export default Tasks
