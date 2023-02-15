import React from "react";

function Text() {
  const persianCharacters = [
    "ض",
    "ص",
    "ث",
    "ق",
    "ف",
    "غ",
    "ع",
    "ه",
    "خ",
    "ح",
    "ج",
    "چ",
    "ش",
    "س",
    "ی",
    "ب",
    "ل",
    "ا",
    "ت",
    "ن",
    "م",
    "ک",
    "گ",
    "ظ",
    "ط",
    "ز",
    "ر",
    "ذ",
    "د",
    "ئ",
    "و",
  ];
  const englishCharacters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  return (
    <div className="keyboard">
      {persianCharacters.map((character, index) => (
        <div key={index} className="character-container">
          <button className="character-button">{character}</button>
          <div className="english-character">{englishCharacters[index]}</div>
        </div>
      ))}
    </div>
  );
}
export default Text;
