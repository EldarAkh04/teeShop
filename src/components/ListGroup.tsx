import "./ListGroup.css";
import { useState } from "react";
import TeaButtons from "./TeaButtons.tsx";
import TeapotButtons from "./TeapotButton.tsx";
import GiftButtons from "./GiftButtons.tsx"
import BiscuitButtons from "./BiscuitsButtons.tsx"

export default function ListGroup() {
  const items = ["Tea", "Teapot", "Gifts", "Biscuits"];
  const [activeIndex, setActiveIndex] = useState(0);

  let content;
  if (activeIndex === 0) {
    content = <TeaButtons />
  }else if (activeIndex === 1) {
    content = <TeapotButtons />
  }else if(activeIndex ===2){
    content = <GiftButtons />
  }else if(activeIndex=== 3){
    content = <BiscuitButtons />
  }

  return (
    <>
      <ul className="GroupList">
        {items.map((item, index) => (
          <li
            key={item}
            className={`listItems ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      {content}
    </>
  );
}
