import React, {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    console.log('UseState rendered');
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
}

export default UseState;
