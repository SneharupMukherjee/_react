import React, { useState}  from 'react'

function Counter() {

    const [state, setstate] = useState( 0 );

    return (
        <div>
            <h1>{ state }</h1>
            <button onClick={ () => setstate(state + 1) }>Click me!</button>
        </div>
    )
}

export default Counter
