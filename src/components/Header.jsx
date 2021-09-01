import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('On Click method working')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='blue' text='Add Task' onClick={onClick}/>
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