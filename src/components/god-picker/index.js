import React from "react";
import "./god-picker.css";
import { GODS } from "../../constants";
import { GodLabel } from "../god-label";

const renderGods = (category, onSelect) => {
  return GODS.filter(g => g.category === category).map(god => (
    <GodLabel key={god.name} name={god.name} onSelect={() => onSelect(god)} />
  ));
};

const GodPicker = ({ onSelect }) => {
  return (
    <div>
      <p className="App-intro">Please select a god:</p>
      <div className="godly-container">
        <section>
          <h3>Most Popular</h3>
          {renderGods(0, onSelect)}
        </section>
        <section>
          <h3>Editor's Choice</h3>
          {renderGods(1, onSelect)}
        </section>
      </div>
    </div>
  );
};

export { GodPicker };
