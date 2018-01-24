import React from "react";
import { counter } from "../utils/counter";
import "./style.css";

export class HealthBar extends React.Component {
  state = {
    count: 100,
    message: null,
    imgUrl: null
  };

  add = () => {

    if(isNaN(this.state.count)) {
     this.setState({ message: "It's too late." })
    }
    else {
     this.setState({count: this.state.count + 5})
    }
  }

  componentDidMount() {
    this.setState((prevState, props) => { 
      const startTime = Date.now();
             this.countdown = setInterval(() => {
                let newCount = this.state.count - 1;
                if (newCount < 0) {
                  newCount = "I'm dead!";
                  clearInterval(this.countdown);
                }
                if (newCount >= 120) {
                  newCount = "I've exploded from eating too much! 💥";
                  this.setState({imgUrl : "https://media1.tenor.com/images/6732bf96f2e1f7453040259944bc0c5e/tenor.gif?itemid=3683672"})
                  clearInterval(this.countdown);
                }

                this.setState({ count: newCount });
              }, 500);
    })
  }

  render() {
    const img = this.state.imgUrl;
    return <div className="healthDiv">
    <div className="healthText">Health: {this.state.count}</div>
    <button className="healthButton" onClick = {this.add}>{this.state.message ? this.state.message : "Feed me!"}</button>
    {img ? <img className="healthGif" src={img} /> : <div className="null"></div>}
    </div>
  }
}
