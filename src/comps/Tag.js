import React, { useEffect, useState } from 'react';

const tag = () => {

    const [initialState, setInitialState] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonResponse => console.log(jsonResponse.app))
    }, [])

    console.log(initialState)
    return (
        <div>
            {initialState.length > 0 && initialState.map((e, i) => <li key={i}>{e}</li>)}
        </div>
    );
};

export default tag;