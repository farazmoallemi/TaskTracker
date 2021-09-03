import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((taskObject) =>
        <Task 
        key={taskObject.id}
        task={taskObject}
        onDelete={onDelete}
        onToggle={onToggle}
        />
      )}
    </div>
  )
}

export default Tasks
