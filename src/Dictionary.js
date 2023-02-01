import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  function Search(event) {
    event.preventDefault();
    alert(`searching for ${keyWord} definition`);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="Search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
