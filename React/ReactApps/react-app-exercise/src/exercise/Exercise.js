// REACT APP EXERCISE

//  5a
import { usedState } from 'react';

// 1a and 3b
const Exercise = ({ good = 'Awesome', bad = 'Terrible' }) => {
    // 5c
    const [num, setNum] =  usedState(1);
    // 5d
    const addNum = () => setNum(addNum);

    //2a
    return (
        <div>
            <h1>{good}</h1>
            <h1>{bad}</h1>
            {/* 4a */}
            <button onClick={() => alert('Congrats! You have clicked the button')}>CLICK HERE</button>
            {/* 5b & 5e */}
            <button onClick={() => setNum(addNum+ 1)}>STATE</button>
            {/* 5f */}
            <h1>{num}</h1>
        </div>
    );
}

// 1b
export default Exercise;