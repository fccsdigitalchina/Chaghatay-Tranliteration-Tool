import React from "react";
import "./Keyboard.css";

function Keyboard({ handleClicked }) {
  const key1 = [
    "ش",
    "س",
    "ژ",
    "ز",
    "ر",
    "ذ",
    "د",
    "خ",
    "ح",
    "چ",
    "ج",
    "ث",
    "ت",
    "پ",
    "ب",
    "آ",
    "ا",
  ];
  const key2 = [
    "ی",
    "ه",
    "ن",
    "م",
    "ل",
    "گ",
    "ک",
    "ق",
    "ف",
    "غ",
    "ع",
    "ظ",
    "ط",
    "ض",
    "ص",
  ];
  const key3 = ["ء", "ئ", "ؤ", "أ", "ي", "هٔ"];

  const key4 = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  const english1 = [
    "sh",
    "s",
    "zh",
    "z",
    "r",
    "dh",
    "d",
    "kh",
    "ḥ",
    "ch",
    "j",
    "s̲",
    "t",
    "p",
    "b",
    "ā",
    "a",
  ];

  const english2 = [
    "y",
    "h",
    "n",
    "m",
    "l",
    "g",
    "k",
    "q",
    "f",
    "gh",
    "’",
    "ẓ",
    "ṭ",
    "ż",
    "ṣ",
  ];

  const english3 = ["ʾ", "ʾy", "wʾ", "ʾa", "ẏ", "h"];

  const english4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div className="keyboard">
        {key1.map((key, idx) => (
          <div className="character-container">
            <div className="english-character">{english1[idx]}</div>
            <button key={idx} className="key" onClick={handleClicked}>
              {key}
            </button>
          </div>
        ))}
      </div>
      <div className="keyboard">
        {key2.map((key, idx) => (
          <div className="character-container">
            <div className="english-character">{english2[idx]}</div>
            <button key={idx} className="key" onClick={handleClicked}>
              {key}
            </button>
          </div>
        ))}
      </div>
      <div className="keyboard">
        {key3.map((key, idx) => (
          <div className="character-container">
            <div className="english-character">{english3[idx]}</div>
            <button key={idx} className="key" onClick={handleClicked}>
              {key}
            </button>
          </div>
        ))}
      </div>
      <div className="keyboard">
        {key4.map((key, idx) => (
          <div className="character-container">
            <div className="english-character">{english4[idx]}</div>
            <button key={idx} className="key" onClick={handleClicked}>
              {key}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
