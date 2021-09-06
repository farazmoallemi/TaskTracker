import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((taskObject, index) =>
        <Task 
        key={index}
        task={taskObject}
        onDelete={onDelete}
        onToggle={onToggle}
        />
      )}
    </div>
  )
}

export default Tasks
