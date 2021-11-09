import React, { useState } from "react";

import "./styles.css";

export default function App() {
  //emoji dictionary
  var emojiDictionary = {
    A: "Grinning Face",
    B: "Smileys & People",
    C: "Face with Tears of Joy",
    D: "Pleading Face",
    E: "Smiling Face with Hearts"
  };

  var [emojiInput, newEmojiInput] = useState("");
  var [meaning, newMeaning] = useState("translation will appear here...");

  function emojiHandeler(event) {
    newEmojiInput(event.target.value);
    if (emojiInput in emojiDictionary) {
      meaning = emojiDictionary[emojiInput];
      newMeaning(meaning);
    } else {
      meaning = "we don't find it";
      newMeaning(meaning);
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
      <h2>{emojiInput}</h2>
      <h2>{meaning} </h2>
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

// "😀": "Grinning Face",
//     "😃": "Smileys & People",
//     "😂": "Face with Tears of Joy",
//     "🥺": "Pleading Face",
//     "🥰": "Smiling Face with Hearts"
