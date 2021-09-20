import React, { useState } from 'react';

function Toggle() {

    const [state, setstate] = useState( true )

    return (
        <div>
            { state && <Hi />}
            <button onClick={ () => setstate( !state ) }>toggle text!</button>
        </div>
    )

    function Hi() {
        return (
            <div>
                <h1>👋 Hi there!</h1>
            </div>
        )
    }
}

export default Toggle
