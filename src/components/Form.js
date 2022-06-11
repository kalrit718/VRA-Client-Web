import React, { useState } from 'react';
import './Form.css';

var myprops;
var myEnteredRegNum;
var setMyEnteredRegNum;

export default function Form(props) {

    myprops = props;

    const [enteredRegNum, setEnteredRegNum] = useState();
    myEnteredRegNum = enteredRegNum;
    setMyEnteredRegNum = setEnteredRegNum;

    return (
        <form>
            <div className="texts">
                <input className="texts" id='input-field' onChange={changeRegNum} type='text' placeholder="Enter Here" />
            </div>
            <br />
            <button onClick={onsubmitBtnClick} id="submitBtn" className='submit-button' type="button">Submit</button>
        </form>
    );
}

function changeRegNum(e) {
    setMyEnteredRegNum(e.target.value);
}

async function onsubmitBtnClick(e) {
    console.log(myEnteredRegNum);
    fetch(`http://localhost:3001/determineType/${myEnteredRegNum}`)
        .then(response => response.json())
        .then(data => myprops.onResposeReceived(data));
}
