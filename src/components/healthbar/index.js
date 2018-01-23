import React from "react";
import { counter } from "../utils/counter";

export class HealthBar extends React.Component {
  state = {
    count: 100,
    time: 0,
    frequency: 1000
  };
  componentDidMount() {
    const newCount = counter(prevState.count, prevState.frequency);
    this.setState({ count: newCount });
    console.log(this.state.count);
  }
  render() {
    return <div>Health: {this.state.count}</div>;
  }
}
