import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button 
        color={showAdd ? 'red':'blue'} 
        text={showAdd ? 'Close' : 'Add Task'} 
        onClick={onAdd}
      />}
    </header>
  )
}
Header.defaultProps = {
  title: 'Task Tracker',
}

PropTypes.propTypes = {
  title: PropTypes.string.isRequired,
} 
// writing CSS inside of a JavaScrpt file
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'blue'
// }
export default Header