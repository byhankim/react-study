// rafce
import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    return <button onClick={onClick} style={{backgroundColor:color}}className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string, // will be string
    color: PropTypes.string, // wiill also be string
    onClick: PropTypes.func,
}

export default Button
