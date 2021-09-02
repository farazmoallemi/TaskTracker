

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((taskObject) =>
        <h3 key={taskObject.id}>{taskObject.text}</h3>
      )}
    </div>
  )
}

export default Tasks
