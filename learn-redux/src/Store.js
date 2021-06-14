import React, { useContext, createContext, useState } from 'react';
import useLocalStorage from './useLocalStorage'
const Context = createContext({
    name: '',
})


const Store = () => {

    const [userName, setUserName] = useState('')

    const Button = ({text}) => {
        return (
            <button>{text}</button>
        )
    }

    return (
        <>
            hi
        </>
    )
}

export default Store