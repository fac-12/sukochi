import React from "react";
import { counter } from "../utils/counter";
import "./style.css";

export class HappyBar extends React.Component {
  state = {
    count: 100,
    message: null, 
    imgUrl: null
  };

  add = () => {
    if(isNaN(this.state.count)) {
     this.setState({ message: "Noone shits in nirvana." })
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
                  newCount = "You're dead from 💩 !";
                  clearInterval(this.countdown);
                }
                if (newCount >= 200) {
                  newCount = "I've reached nirvana 😇";
                  this.setState({imgUrl : "https://media1.tenor.com/images/9a0e1742ddf6762f30be6a78d1b21dcc/tenor.gif?itemid=3586112"})
                  clearInterval(this.countdown);
                }
                this.setState({ count: newCount });
              }, 400);
    })
  }

  render() {
  	const img = this.state.imgUrl;
    return <div className="happyDiv">
    <div className="happyText">Happiness: {this.state.count}</div>
    <button className= "happyButton" onClick={this.add}>{this.state.message ? this.state.message : "Clean my 💩!"}</button>
    {img ? <img src={img} className="happyGif" /> : <div className="null"></div>}
    </div>
  }
}
