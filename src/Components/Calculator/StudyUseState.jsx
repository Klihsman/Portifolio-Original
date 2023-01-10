import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import useIsOnlineFriend from '../../CustomHooks/useIsOnlineFriend.jsx';

const users = [
    {
        name: 'klihsman',
        status: 'online',
    },
    {
        name: 'john',
        status: 'online',
    },
    {
        name: 'paul',
        status: 'offline',
    }
]

export default function StudyUseState() {
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('hello');
    const [myArray, updateMyArray] = useState([]);
    const isOnline = useIsOnlineFriend(users[1]);

    const numberRef = useRef('');

    const onClick = () => {
        updateMyArray( arr => [...arr, `${arr.length}`]);
    };

    const handleNumber = (operator) => {
        if(operator === '+') {
            setNumber(number + 1);
        } else {
            setNumber(number - 1);
        }

        numberRef.current.style.color = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    }

    // const onClickCallBack = useCallback (()=> {
    //     updateMyArray( arr => [...arr, `${arr.length}`]);
    // });

    // const onClickMemo = useMemo (()=> {
    //     updateMyArray( arr => [...arr, `${arr.length}`]);
    // }, [myArray]);

    useEffect(()=> {
        document.title = `The number is ${number}`
    }, [number]);

    return(
        <div>
            <h1 ref={numberRef}>{number}</h1>
            <button onClick={()=> {handleNumber('-')}}>Decrement</button>
            <button onClick={()=> {handleNumber('+')}}>Increment</button>
            <br/>
            <h1>{text}</h1>
            <button onClick={()=> {setText('hello')}}>Reset text</button>
            <button onClick={()=> {setText('Hello World')}}>Make a new text</button>
            <ul>
                {myArray?.map((element) => {
                    return <li>{element}</li>
                })}
            </ul>
            <br/>
            <button onClick={onClick}>Add Item</button>
            <h1>The use is online? {isOnline}</h1>
        </div>
    )
}