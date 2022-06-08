import { Component } from "react";

var classStyle = "color:red";
class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.initNumber,
            date: props.initDate,
        };
        this.isRandom = false;
        this.setChangeData = this.setChangeData.bind(this);
    }
    // render 이전
    componentWillMount() {
        // constructor 이후 render 이전 ==> 사용 검지검지
        // console.log에 %c을 적용하게 되면 스타일을 적용할 수 있다.
        console.log("%cclass => componentWillUnmount", classStyle);
    }
    // render 이후
    componentDidMount() {
        // render이후
        console.log("%cclass => componentDidMount", classStyle);
    }
    // setState를 통해 state를 변경할 경우 이후 componentWillUpdate 처리
    shouldComponentUpdate(newProps, newState) {
        // setState메서드의 호출이 발생할 경우
        // true를 반환시 componetWillUpdate를 호출, false시 종료
        console.log("%cclass => shouldComponentUpdate", classStyle);
        if (this.isRandom) {
            if (newState.number === this.state.number) {
                return false;
            }
        } else {
            if (newState.date === this.state.date) {
                return false;
            }
        }
        return true;
    }
    // shouldComponentUpdate 반환값이 true이면 처리, 이후 render호출
    componentWillUpdate(nextProps, nextState) {
        // componentWillUpdate는 shouldComponentUpdate메서드의 반환값이 true이면 호출함.
        // componentWillUpdate이후 render메서드를 호출
        // 현재 componentWillMount, componentWillUpdate메서드는 차후 React버전에서 버그 가능성이 높아 자제할것.
        // 비동기 렌더링이 활성화되면 더욱 문제가 발생함.
        console.log("%cclass => componentWillUpdate", classStyle);
    }

    setChangeData(name, data) {
        // 클래스형 컴포넌트에서 state는 반드시 setState메서드를 이용하여 변경해야함.
        // 변경시 해당 컴포넌트가 render메서드를 호출.
        this.setState({ [name]: data });
    }

    render() {
        return (
            <div className="comp">
                <h2>클래스형 컴포넌트</h2>
                <p>Number : {this.state.number}</p>
                <p>Date : {this.state.date}</p>
                <input
                    type="button"
                    value="random"
                    name="number"
                    onClick={(e) => {
                        this.isRandom = true;
                        const randomNumber = Math.round(Math.random() * 10 + 1);
                        this.setChangeData(e.target.name, randomNumber);
                    }}
                />
                <input
                    type="button"
                    value="date"
                    name="date"
                    onClick={(e) => {
                        this.isRandom = false;
                        const nowDate = new Date().toString();
                        this.setChangeData(e.target.name, nowDate);
                    }}
                />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        // render 이후에 호출되는 라이프 사이클 메서드
    }
}

export default ClassComp;
