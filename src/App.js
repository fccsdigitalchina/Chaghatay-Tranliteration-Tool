import "./App.css";
import React, { useState } from "react";
import CopyText from "./components/CopyText";
import Keyboard from "./components/Keyboard";
import Text from "./components/Text";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [value, setValue] = useState("");
  const [persian, setPersian] = useState([]);
  const [translate, setTranslate] = useState([]);

  let translateArr = [];

  const handleSubmit = (e) => {
    setPersian([]);
    e.preventDefault();
    console.log(value);

    let persianArr = [];

    for (let i = 0; i < value.length; i++) {
      persianArr.push(value.at(i));
      convert(value.at(i));
    }

    setPersian(persianArr);
    console.log(persian);
    console.log(translate);
  };

  const convert = (char) => {
    switch (char) {
      case "ب":
        translateArr.push("b");
        break;
      case "پ":
        translateArr.push("p");
        break;
      case "ت":
        translateArr.push("t");
        break;
      case "ث":
        translateArr.push("s̲");
        break;
      case "ج":
        translateArr.push("j");
        break;
      case "چ":
        translateArr.push("ch");
        break;
      case "ح":
        translateArr.push("ḥ");
        break;
      case "خ":
        translateArr.push("kh");
        break;
      case "د":
        translateArr.push("d");
        break;
      case "ذ":
        translateArr.push("dh");
        break;
      case "ر":
        translateArr.push("r");
        break;
      case "ز":
        translateArr.push("z");
        break;
      case "ژ":
        translateArr.push("zh");
        break;
      case "س":
        translateArr.push("s");
        break;
      case "ش":
        translateArr.push("sh");
        break;
      case "ص":
        translateArr.push("ṣ");
        break;
      case "ض":
        translateArr.push("ż");
        break;
      case "ط":
        translateArr.push("ṭ");
        break;
      case "ظ":
        translateArr.push("ẓ");
        break;
      case "ع":
        translateArr.push("’");
        break;
      case "غ":
        translateArr.push("gh");
        break;
      case "ف":
        translateArr.push("f");
        break;
      case "ق":
        translateArr.push("q");
        break;
      case "ك":
        translateArr.push("ḳ");
        break;
      case "ل":
        translateArr.push("l");
        break;
      case "م":
        translateArr.push("m");
        break;
      case "ن":
        translateArr.push("n");
        break;
      case "ة":
        translateArr.push("t");
        break;
      case "و":
        translateArr.push("v");
        break;
      case "ی":
        translateArr.push("y");
        break;
      case "آ":
        translateArr.push("ā");
        break;
      case "ا":
        translateArr.push("a");
        break;
      case "ای":
        translateArr.push("é");
        break;
      case "او":
        translateArr.push("ū");
        break;
      case "و":
        translateArr.push("o");
        break;
      case "ی":
        translateArr.push("é");
        break;
      case "ه":
        translateArr.push("h");
        break;
      case "ک":
        translateArr.push("k");
        break;
      case "ي":
        translateArr.push("ẏ");
        break;
      case "ڭ":
        translateArr.push("ḡ");
        break;
      case "ۀ":
        translateArr.push("hʾ");
        break;
      case "۰":
        translateArr.push("0");
        break;
      case "۱":
        translateArr.push("1");
        break;
      case "۲":
        translateArr.push("2");
        break;
      case "۳":
        translateArr.push("3");
        break;
      case "۴":
        translateArr.push("4");
        break;
      case "۵":
        translateArr.push("5");
        break;
      case "۶":
        translateArr.push("6");
        break;
      case "۷":
        translateArr.push("7");
        break;
      case "۸":
        translateArr.push("8");
        break;
      case "۹":
        translateArr.push("9");
        break;
      case " ":
        translateArr.push(" ");
        break;
      case ".":
        translateArr.push(".");
        break;
      case ",":
        translateArr.push(",");
        break;
      case "گ":
        translateArr.push("g");
        break;
      case "ء":
        translateArr.push("ʾ");
        break;
      case "ئ":
        translateArr.push("ʾy");
        break;
      case "ؤ":
        translateArr.push("wʾ");
        break;
      case "أ":
        translateArr.push("ʾa");
        break;
      default:
        translateArr.push("");
    }

    setTranslate(translateArr);
  };

  const handleClicked = (e) => {
    setValue(value + e.target.innerText);
  };

  const handleCopy = (e) => {
    e.preventDefault();
    const text = translate.join("");
    navigator.clipboard.writeText(text);
  };

  const handleClear = (e) => {
    // e.preventDefault();
    // setValue("");
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <form>
          <label>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              //rows={10}
              //cols={0}
              required
              placeholder="Enter Chaghatay Here..."
            />
          </label>
          <button className="send" onClick={handleSubmit}>
            Submit
          </button>
          <button className="copy" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
        </form>

        <CopyText translate={translate} />
      </div>
      <Keyboard handleClicked={handleClicked} />
      <Footer />
    </div>
  );
}

export default App;
