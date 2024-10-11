import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Analyst",
          "ML Engineer",
          "NLP Enthusiast",
          "Computer Vision Engineer",
          "Professional Coffee Drinker",
          "Part-time Code Magician",
          "Full-time Debugging Expert",
          "Stack Overflow Surfer",
          "Keyboad Warrior",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
