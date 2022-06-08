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
