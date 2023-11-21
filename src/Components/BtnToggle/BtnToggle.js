import React, {useContext} from 'react'
import {Context} from '../../context/langContext'

export default function BtnToggle() {

    const {toggleTheme, theme} = useContext(Context)

    return (
        <button 
        onClick={toggleTheme}
        className={theme ? "btn-toggle dark-btn" : "btn-toggle"}>
            {theme ? "LIGHT" : "DARK"}
        </button>
    )
}
