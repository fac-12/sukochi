import React from "react";
import "./style.css";
import creature from "../../../public/chicklet.png";
import { HealthBar } from "../healthbar";
import { HappyBar } from "../happybar";

export class Creature extends React.Component {
  render() {
    return (
      <div>
      	<h2 className="heading">Meet your creature!</h2>
        <img className="creature-img" src={creature} />
        <div className="buttonContainer">
        <HealthBar />
        <HappyBar />
        </div>
      </div>
    );
  }
}
