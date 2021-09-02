import Task from "./Task"

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((taskObject) =>
        <Task 
        key={taskObject.id}
        task={taskObject}
        onDelete={onDelete}/>
      )}
    </div>
  )
}

export default Tasks
