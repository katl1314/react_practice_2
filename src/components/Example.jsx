import { useState, useEffect } from "react";

function Example(props) {
    let [number, setNumber] = useState(0);
    /**
     * side effect는 리엑트의 용도는 렌더링하여 화면에 보여주는 것이 주 목적임.
     * 다만 렌더링 이외의 작업, 렌더링 이후의 처리같은 작업을 side effect(부수 효과)라고 함.
     */
    useEffect(() => {
        // render시 동작도 하지만, state가 변경되었을때도 호출함.
        // 리엑트의 대표적인 훅인 useState는 여러개 정의가 가능함.
        console.log(`%c Example - 1 => You Clicked ${number} times.`);
        // 리엑트의 경우 componentWillMount나 componentDidMount를 통해 렌더링 순간에 수행할 초기 작업을 함.
        // 렌더링 이후 컴포넌트를 소멸해야 할 때 componentDidUnmount를 수행함.
        // 렌더링시 작업과 소멸 시 작업을 분리해야해.
        // 이것을 cleanup함수라고 함.
        // cleanup함수는 useEffect의 콜백함수내에서 반환해야함.
        return () => {
            console.log("clean up the subscription");
        };
    });
    /* useEffect(() => {
        // render시 동작도 하지만, state가 변경되었을때도 호출함.
        // 리엑트의 대표적인 훅인 useState는 여러개 정의가 가능함.
        console.log(`%c Example - 2 => You Clicked ${number} times.`);
    }); */
    return (
        <div>
            <input
                name="counter"
                value="click"
                type="button"
                onClick={() => {
                    setNumber(number++);
                }}
            ></input>
        </div>
    );
}

export default Example;
