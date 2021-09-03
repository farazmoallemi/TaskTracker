import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red':'blue'} text={showAdd ? 'Close' : 'Add Task'} onClick={onAdd}/>
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