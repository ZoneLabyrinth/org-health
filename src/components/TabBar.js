import React, { useState } from 'react';

export default function TarBar(props) {
    // 声明一个叫 "count" 的 state 变量
    console.log(props);
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>
                You clicked
                {count}
                {' '}
                times
            </p>
            <button type="button" onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
