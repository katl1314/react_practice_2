# React

## 1. 리엑트 훅(React Hook)

-   React 16.8 이후 훅(Hook)이 추가
-   기본적으로 내장된 훅이 있고, 사용자 정의 훅도 있음.
-   훅의 특징은 이름이 use로 시작함.
-   리엑트에서 제공하는 훅은 useState임.

## 2. React Hook : useState

-   useState를 사용하는 이유는 : 함수형 컴포넌트에서도 props를 state에 초기값을 설정할때 사용함.
-   useState에는 첫번째 인자 state에 초기화할 값을 전달받음
-   useState는 두개의 요소를 가진 배열을 반환하며 첫번째 요소는 인자로 전달한 값,<br>두번째 요소는 state값을 변경(클래스 컴포넌트의 setState 역할)하는 메서드를 가짐.
-   useState를 사용하기 위해서는 react에서 useState를 import를 해야함.
<pre>
    import React, { useState, ... } from "react";

    function MyRender(props) {
        // state 초기화
        const numberState = useState(props.initNumber);
    }
</pre>

## 3. React Hook : useEffect

-   useEffect 사용하는 이유 : 함수형 컴포넌트에서 클래스형 컴포넌트의 라이프사이클 componentWillMount(render 함수 이후), componentDidUpdate(state변경을 통한 render이후)처럼 render이후에 처리를 위해 만들어짐.

-   useEffect에 인자로 콜백함수를 전달하여, 화면에 렌더링이 되고 이후 처리를 작성한다.

-   useState를 통해 두번째 배열 요소 전달받은 함수를 통해 state값을 변경 시 다시 화면에 render하기 때문에 콜백 함수를 호출한다.
<pre>
    import { useState, useEffect } from "react";

    function Example(props) {
        useEffect(() => {
            console.log("화면에 rendering이후에 발생해요~");
        });
        return ...
    }
</pre>

## 4. useEffect cleanup

-   클래스형 컴포넌트에서는 DOM에 렌더링할때 초기작업을 위한 라이프 사이클 componentWillMount, componentDidMount, 컴포넌트 소멸을 위한 componentDidUnmount으로 구성되어 있음.

-   함수형 컴포넌트에는 해당 라이프사이클을 지원하지 않으나, useEffect의 콜백함수에 함수를 반환하는
방식으로 처리할 수 있음.
<pre>
useEffect(function() {
    console.log("useEffect");
    return function() {
        // useEffect cleanup => 컴포넌트 소멸 후 useEffect의 콜백 함수를 호출함.
        console.log("useEffect return");
    }
})
</pre>

-   만약 cleanup을 무분별하게 적용하게 되면 성능 저하를 발생시킬 수 있음.
-   클래스형 컴포넌트는 componentWillMount, componentDidMount, componentDidUnmount와 같이 함수의  
    인자를 통해 비교하여, 이러한 문제를 해결할 수 있었다.
-   useEffect에도 해당 기능에 대해서 내제되어 있으며, useEffect의 두번째 인자로 배열로 전달하고,
    배열의 요소가 변경될 경우 첫번째로 전달한 콜백함수를 호출한다.

<pre>
useEffect(function() {
    console.log("useEffect");
    return function() {
        // useEffect cleanup => 컴포넌트 소멸 후 useEffect의 콜백 함수를 호출함.
        console.log("useEffect return");
    }
}, [number]);
</pre>

다음 예제는 number가 바뀔때마다 useEffect를 호출하며, number가 변경되지 않으면 호출하지 않는다.
