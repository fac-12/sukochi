import React from "react";
import "./style.css";
import creature from "../../../public/creature.jpg";
import { HealthBar } from "../healthbar";
import { HappyBar } from "../happybar";

export class Creature extends React.Component {
  render() {
    return (
      <div>
        <img className="creature-img" src={creature} />
        <HealthBar />
        <HappyBar />
      </div>
    );
  }
}
