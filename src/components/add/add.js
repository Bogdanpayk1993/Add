import React, { useState, createRef } from 'react';

function Add() {
    const [result, setResult] = useState(NaN)
    const first_numberRef = createRef()
    const second_numberRef = createRef()
    const resultRef = createRef()

    function add() {
        var first_number = parseFloat(first_numberRef.current.value)
        var second_number = parseFloat(second_numberRef.current.value)

        setResult(first_number + second_number)
    }

    return (
        <>
            <h1> Add </h1>
            <input ref={first_numberRef}></input>
            +
            <input ref={second_numberRef}></input>
            <button onClick={add}> = </button>
            {
                !isNaN(result) ?
                <input ref={resultRef} defaultValue={result}></input>
                :
                null
            }
        </>
    );
}

export default Add;