import React, {createContext, useState} from 'react' 


export  const Context = createContext();







let Lang="EN";

export default function ContextProvider ({children})   {

    const [lang, setLang] = useState(Lang)

    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }

    if (theme) {
        document.body.classList.add('dark-body');
    } else {
        document.body.classList.remove('dark-body');
    }

    return (
        <Context.Provider value={{ lang, setLang, toggleTheme, theme }}>
            {children}
        </Context.Provider>
    )

}

