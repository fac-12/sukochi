import React from "react";
import { counter } from "../utils/counter";

export class HappyBar extends React.Component {
  state = {
    count: 100,
    time: 0,
    frequency: 1000
  };
  componentDidMount() {
 this.setState((prevState, props) => {
            if (prevState.count < 0) {
            	console.log("here")
             return this.setState({ count: "You're dead from unhappiness!" });
            } else {
              const startTime = Date.now();
              setInterval(() => {
                const timePassed = Date.now() - startTime;
                const newCount = Math.round(prevState.count - timePassed/1000 - 90);
                this.setState({ count: newCount });
                console.log(this.state.count)
              }, 1000);
            }
            }
            )
  }

  render() {
    return <div>Happiness: {this.state.count}</div>;
  }
}
