import React from 'react';
import {ThemeContext} from '../App'

export default class ClassContextComponent extends React.Component{
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            paddingTop: '2rem',
            marginTop: '2rem',
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}