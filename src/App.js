import React, { useState } from "react";

import "./styles.css";

export default function App() {
  //emoji dictionary
  var emojiDictionary = {
    "😀": "Grinning Face",
    "😂": "Face with Tears of Joy",
    "😉": "Winking Face",
    "🤢": "Nauseated Face",
    "😠": " Angry Face"
  };

  var [emoji, updateEmoji] = useState("");
  var [meaning, updateMeaning] = useState("translation will appear here...");

  function emojiHandeler(event) {
    const userInputEmoji = event.target.value;
    updateEmoji(userInputEmoji);

    if (userInputEmoji in emojiDictionary) {
      meaning = emojiDictionary[userInputEmoji];
      updateMeaning(meaning);
    } else {
      meaning = "we don't find it";
      updateMeaning(meaning);
    }
  }

  return (
    <div className="App">
      <h2>Know your emotions</h2>

      <input
        id="input"
        onChange={emojiHandeler}
        placeholder="Put the emoji here"
      ></input>
      <h2>{emoji}</h2>
      <h2>{meaning} </h2>
      <a>😀</a>
      <a>😂</a>
      <a>😉</a>
      <a>🤢</a>
      <a>😠</a>
    </div>
  );
}

//step 1
//basic layout --done

//step 2
//create data set or dictionary --done

//step 3
//use state function concept --done

//step 4
//set conditional logic

//step 5
//test the app

//step 6
//push on git
