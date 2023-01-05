import React, {useState} from 'react';

export default function StudyUseState() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('hello');
    const [myArray, updateMyArray] = useState([]);

    const onClick = () => {
        updateMyArray( arr => [...arr, `${arr.length}`]);
    };

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={()=> {setNumber(number - 1)}}>Decrement</button>
            <button onClick={()=> {setNumber(number + 1)}}>Increment</button>
            <br/>
            <h1>{text}</h1>
            <button onClick={()=> {setText('hello')}}>Reset text</button>
            <button onClick={()=> {setText('Hello World')}}>Make a new text</button>
            <ul>
                {myArray?.map((element) => {
                    return <li>{element}</li>
                })}
            </ul>
           
            <button onClick={onClick}>Add Item</button>
        </div>
    )
}