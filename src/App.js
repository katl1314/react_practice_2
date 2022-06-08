import "./App.css";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
import Example from "./components/Example";

function App() {
    const nowDate = new Date().toString();
    return (
        <div className="App">
            <FuncComp initNumber={2} initDate={nowDate} />
            <ClassComp initNumber={2} initDate={nowDate} />
            <Example/>
        </div>
    );
}

export default App;
