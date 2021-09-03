import { useState} from 'react'

const AddTask = ({ onAdd }) => {
  // parenethesis on use state are used for setting default values
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    // send alert if user didn't input a task
    if(text === '') {
      alert('Please add a task');
      return 
    }

    onAdd({ text, day, reminder })

    // on submission of task, reset values to original
    setText('')
    setDay('')
    setReminder(false)

  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input 
          type='text' 
          placeholder='Add Task' 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day and Time</label>
        <input 
          type='text' 
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox'
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      
      <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
