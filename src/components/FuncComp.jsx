import React, { useState } from "react";

function FuncComp(props) {
    // 함수형 컴포넌트의 props는 함수의 인자로 전달한다.
    // 리엑트에서 제공하는 훅인 useState는 인자로 값을 전달하면, 두개의 요소를 가진 배열을 반환함.
    // useState사용시 class 컴포넌트의 constructor에 state를 정의하는 것과 동일함.
    const [number, setNumber] = useState(props.initNumber);
    const [date, setDate] = useState(props.initDate);
    // const number = numberState[0]; // useState메서드의 첫번째 인자
    // const setNumber = numberState[1]; // state를 변경하고 render발생하는 함수
    return (
        <div className="comp">
            <h2>함수형 컴포넌트</h2>
            <p>Number : {number}</p>
            <p>Date : {date}</p>
            <input
                type="button"
                value="random"
                onClick={() => {
                    const randomNumber = Math.round(Math.random() * 10) + 1;
                    // 클래스 컴포넌트의 this.setState와 동일함.
                    // this.setState({number : randomNumber})
                    setNumber(randomNumber);
                }}
            />
            <input
                type="button"
                value="date"
                name="date"
                onClick={() => {
                    const nowDate = new Date().toString();
                    setDate(nowDate);
                }}
            />
        </div>
    );
}

export default FuncComp;
