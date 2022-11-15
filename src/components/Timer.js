import { Component } from "react";

class Timer extends Component {
    updateTimer() {
        const {timerValue} = this.state;
        this.setState({timerValue: timerValue + 1})
    }
    constructor() {
        super();
        this.state = {
            timerValue: 0,
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.updateTimer()
        }, 1000);
    }

    componentWillUnmount() {

    }
    render() {
        const {timerValue} = this.state;
        return <h1>Timer: { timerValue } s</h1>
    }

}
export default Timer;