import React from 'react';
import ReactDOM from 'react-dom';

export default function List({getItems}) {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setItems(getItems())
        console.log("Updating items!")
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}