import "./App.css";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";

function App() {
    const nowDate = new Date().toString();
    return (
        <div className="App">
            <FuncComp initNumber={2} initDate={nowDate} />
            <ClassComp initNumber={2} initDate={nowDate} />
        </div>
    );
}

export default App;
