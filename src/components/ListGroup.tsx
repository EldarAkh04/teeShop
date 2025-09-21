import "./ListGroup.css"
import { useState } from "react";

export default function ListGroup() {

  const items = ['Tea', 'Teapot', 'Gifts'];
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <ul className="GroupList">
      {items.map((item, index) => 
        <li
            
            key={item}
            className={`listItems ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
        >
            {item}
        </li>

      )}
    </ul>
  );
}
