import React from 'react';
// import ReactDOM from 'react-dom';

// import List from './List.js';

import FunctionContextComponent from './components/FunctionContextComponent';
// import ClassContextComponent from './components/ClassContextComponent';
import {ThemeProvider} from "./components/ThemeContext";
// export const ThemeContext = React.createContext();

// import Todo from './components/Todo';
// export const ACTIONS = {
//     ADD_TODO: 'add-todo',
//     TOGGLE_TODO: 'toggle-todo',
//     DELETE_TODO: 'delete-todo',
// }
// function reducer(todos, action){
//     switch (action.type) {
//         case ACTIONS.ADD_TODO:
//             return [...todos, newTodo(action.payload.name)]
//         case ACTIONS.TOGGLE_TODO:
//             return todos.map(todo => {
//                 if(todo.id === action.payload.id){
//                     return {...todo, complete: !todo.complete};
//                 }
//                 return todo;
//             })
//         case ACTIONS.DELETE_TODO:
//             return todos.filter(todo => todo.id !== action.payload.id)
//         default:
//             return todos
//     }
// }
// function newTodo(name){
//     return {id: Date.now(), name: name, complete: false}
// }


export default function App() {
    //#################--useEffect--#################
    // const [resourceType, setResourceType] = React.useState('posts');
    //
    // // whenever "resourceType" changes, the page rerenders, otherwise it does not rerender
    // React.useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //         .then(res => res.json())
    //         .then(json => console.log(json));
    // }, [resourceType]);
    //
    // console.log("rendered");
    //
    // return(
    //     <div>
    //         <button onClick={() => setResourceType('posts')}>Posts</button>
    //         <button onClick={() => setResourceType('users')}>Users</button>
    //         <button onClick={() => setResourceType('comments')}>Comments</button>
    //         <h1>{resourceType}</h1>
    //     </div>
    // )

    //#################--useMemo--#################
    // const [number, setNumber] = React.useState(0);
    // const [dark, setDark] = React.useState(false);
    //
    // // our number is the same as before so we are not going to call slowFunction()
    // // takes up memory so don't use it everywhere
    // const doubleNumber = React.useMemo(() => {return slowFunction(number)}, [number])
    //
    // // on each render, a new themeStyle is created that is not the same as the previously stored themeStyle
    // // because it uses reference
    // // this is why useEffect does not work here, because technically themeStyle does change
    // // wrapping themeStyle in useMemo will prevent the execution of useEffect
    // const themeStyle = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black',
    // }
    // React.useEffect(() => {
    //     console.log("theme changed!")
    // }, [themeStyle])
    //
    // // this gets called everytime we rerender, so websiter will be slow
    // function slowFunction(num) {
    //     console.log("Calling slowFunction")
    //     for( let i = 1; i <= 1000000000; i++ ) {}
    //     return num * 2
    // }
    //
    // return (
    //     <>
    //         <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    //         <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
    //         <div style={themeStyle}>{doubleNumber}</div>
    //     </>
    // )

    //#################--useRef--#################
    // const [name, setName] = React.useState('')
    // const renderCount = React.useRef(1)
    // const prevName = React.useRef("")
    // const inputRef = React.useRef()
    // // this is what it looks like {current:0}
    // // this rendering is seperate from the component rendering
    // // persisting values across renders without causing a rerender
    // // counts howmany times it has been rendered
    // React.useEffect(() => {
    //     renderCount.current = renderCount.current + 1
    // })
    //
    // // useRef used to store previous value
    // // prevents the whole component from rerendering
    // React.useEffect(() => {
    //     prevName.current = name
    // }, [name])
    //
    // // each element has a "ref" value used to access dom element
    // function func() {
    //     console.log(inputRef.current)
    // }
    //
    // return (
    //     <>
    //         <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
    //         <div>My name is {name} and it used to be {prevName.current}</div>
    //         <div>I rendered {renderCount.current} times</div>
    //         <button onClick={func}>Click here</button>
    //     </>
    // )

    //#################--useCallback--#################
    // // List.js is for this example
    // const [number, setNumber] = React.useState(1);
    // const [dark, setDark] = React.useState(false);
    //
    // // getItems will only rerender if number changes
    // // useCallback returns the whole function
    // // this lets us pass parameters and use the function in other places
    // // useMemo returns the return value only
    // // similar to useMemo, useCallback does not create a new reference unless there is change
    // // used for slow functions...etc
    // const getItems = React.useCallback(() => {
    //     return [number, number+1, number+2];
    // }, [number])
    //
    // const theme = {
    //     backgroundColor: dark ? '#333' : '#fff',
    //     color: dark ? '#fff' : '#333'
    // }
    //
    // return (
    //     <div style={theme}>
    //         <input
    //             type="number"
    //             value={number}
    //             onChange = {e => setNumber(parseInt(e.target.value))}
    //         />
    //         <button onClick={() => setDark(prevDark => !prevDark)}>Toggle theme</button>
    //         <List getItems={getItems}/>
    //     </div>
    // )

    //#################--useContext--################# Custom hook example aswell
    // useContext is basically for passing props without manually passing it down to children
    // look at the difference in ClassContextComponent(doesn't use 'useContext')
    // and look at FunctionContextComponent(does use 'useContext')

    //ThemeProvider handles all logic and is passed to children

    //ThemeContext.js handles updating creating and passing the values to children (ThemeContext, ThemeUpdateContext)
    //    //      //  also contains custom hooks that give us easy access to ThemeContext and ThemeUpdateContext
    // anything that is put inside "ThemeProvider" will have the dark and light mode effect applied
    // return (
    //     <>
    //         <ThemeProvider>
    //         <FunctionContextComponent/>
    //         </ThemeProvider>
    //     </>
    // )

    //#################--useReducer--#################
    // returns 2 things
    // state is the object
    // dispatch is a function that updates our state, calls reducer in this case
    // const [todos, dispatch] = React.useReducer(reducer, [])
    // const [name, setName] = React.useState('')
    //
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
    //     setName('')
    // }
    //
    // return (
    //     <>
    //         <form onSubmit={handleSubmit}>
    //             <input type='text' value={name} onChange={e => setName(e.target.value)}/>
    //         </form>
    //         {todos.map(todo => {
    //            return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
    //         })}
    //     </>
    // )

}

