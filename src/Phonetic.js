import React from "react";
import Audio from "./Audio.js";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <span className="text">{props.phonetic.text}</span>
      <br />
      <Audio audio={props.phonetic.audio} />
    </div>
  );
}
