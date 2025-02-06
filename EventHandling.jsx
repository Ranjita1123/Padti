import React, { useState } from 'react';
import './EventHandling.css';

function EventHandling() {
    const [count, setCount] = useState(50);

    function add() {
        setCount(count + 1);
    }

    function sub() {
        if(count>0)
        setCount(count - 1);
    }
    

    return (
        <div className="container">
        {count > 0 ? (
            <>
                <h1>{count}</h1>
                <button className='btn1' onClick={add}>ADD</button>
                <button className='btn2' onClick={sub}>SUB</button>
                <p>{count}</p>
            </>
        ) : (
            count === 0 && <h2>Stop!</h2>
        )}
    </div>
    );
}

export default EventHandling;
