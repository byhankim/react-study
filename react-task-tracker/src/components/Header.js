import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// const header = (props) => {
const Header = ({title, onAdd, showAdd}) => { // object destructure
    const location = useLocation()

    return ( // background-color must be camelCased
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            {location.pathname==='/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>}
        </header>
    )
}

// works unless overriden
Header.defaultProps = {
  title: "Test Tracker"
}

// prototype
Header.propTypes = {
    title: PropTypes.string.isRequired
  }

// could also be inline styled:
// <h1 style={{ color: 'red', backgroundColor:'yellow' }}>{title}</h1>
const headingStyle = {
    color: 'red', 
    backgroundColor:'yellow'
}

export default Header
