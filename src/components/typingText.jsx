// src/components/typingText.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["eat lookma", "drink a Çay", "have a great time"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });

    // Clean up
    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="autoType" ref={el}></span>;
}

export default TypingText;
