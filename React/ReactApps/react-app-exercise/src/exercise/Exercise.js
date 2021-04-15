// REACT APP EXERCISE

//  5a
import { useState } from 'react';

// 1a and 3b and 3d
const Exercise = ({ good = 'Great' , bad = 'Not Great' }) => {
    // 5c
    const [num, setNum] =  useState(1);
    // 5d
    const addNum = () => setNum(num + 1);

    //2a
    return (
        <div>
            {/*  3c */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            {/* 4a and 4b */}
            <button onClick={() => alert('Congrats! You have clicked the button')}>CLICK HERE</button>
            {/* 5b & 5e */}
            <button onClick={() => setNum(num + 1)}>STATE</button>
            {/* 5f */}
            <h1>{num}</h1>
        </div>
    );
}

// 1b
export default Exercise;