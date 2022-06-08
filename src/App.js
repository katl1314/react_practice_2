import "./App.css";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
// import Example from "./components/Example";
import { useState } from "react";

function App() {
    const nowDate = new Date().toString();
    const [funcShow, setFuncShow] = useState(true);
    const [classShow, setClassShow] = useState(true);
    return (
        <div className="App">
            <input
                type="button"
                value="remove func"
                onClick={() => {
                    setFuncShow(false);
                }}
            />
            <input
                type="button"
                value="remove class"
                onClick={() => {
                    setClassShow(false);
                }}
            />
            {funcShow ? <FuncComp initNumber={2} initDate={nowDate} /> : ``}
            {classShow ? <ClassComp initNumber={2} initDate={nowDate} /> : ``}
        </div>
    );
}

export default App;
