"use client";
import React, { useState } from 'react';

const Test = () => {
    const [state, setState] = useState(0);
    return (
        <h1>This is test component

            {state}
            <button onClick={() => setState(state + 1)}>Click me</button>
        </h1>
    )
}

export default Test