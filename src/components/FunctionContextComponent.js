import React from 'react';
import{useTheme, useThemeUpdate} from "./ThemeContext";

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
            backgroundColor: darkTheme ? '#333' : '#ccc',
            color: darkTheme ? '#ccc' : '#333',
            paddingTop: '2rem',
            marginTop: '2rem',
        }
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <div style={themeStyles}>Function Theme</div>

        </>
    )
}