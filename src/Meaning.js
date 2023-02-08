import React from "react";
import Synonyms from "./Synonyms.js";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> Defintion:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <br />
            </p>
          </div>
        );
      })}
      <strong>Synonyms:</strong>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}