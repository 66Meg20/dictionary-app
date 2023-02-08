import React from "react";
import Audio from "./Audio.js";
export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <Audio audio={props.phonetic.audio} />
      <br />
      {props.phonetic.text}
    </div>
  );
}
