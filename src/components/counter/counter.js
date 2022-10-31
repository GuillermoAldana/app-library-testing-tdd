import React, { useState } from 'react';

const Counter = () => {
    const [counts, setCounts] = useState(0);
    return (
        <div>
            <button onClick={()=> setCounts(counts+1)}>Click</button>
            <p>Clicked times: {counts}</p>
        </div>
    )
}

export default Counter;