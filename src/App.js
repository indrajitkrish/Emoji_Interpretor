import { useState } from "react";
import "./styles.css";

const dictionary = {
  "👋": "Waving Hand",
  "✋": "Raised Hand",
  "👌": "OK Hand",
  "🖖": "Vulcan Salute",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤙": "Call Me Hand",
  "👏": "Clapping Hands",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "✍️": "Writing Hand",
  "🤏": "Pinching Hand"
  
};
var emojishow = Object.keys(dictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var input = event.target.value;
    var meaning = dictionary[input];
    if (meaning === undefined) {
      meaning = "We don't have the emoji on our database";
    }
    setMeaning(meaning);
  }
  function emojiSelect(emoji) {
    var meaning = dictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <h3>Hand Emojis</h3>
      <input onChange={inputChangeHandler} />
      <h2>{meaning}</h2>
      <h3> Emoji's we know</h3>
      {emojishow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiSelect(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
