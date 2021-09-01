const tasks = [
  {
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
  },
]
const Task = () => {
  return (
    <>
      {tasks.map((taskObject) =>
        <h3 key={taskObject.id}>{taskObject.text}</h3>
      )}
    </>
  )
}

export default Task
