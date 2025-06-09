import "./App.css"
import TypingText from "./components/typingText"; 
import { DrawLine } from "./components/DrawingLine.tsx";



function App() {
  return (
    <div className="app">
      <DrawLine />
        <div className="headerWrapper">
            <img 
              src="https://raw.githubusercontent.com/EldarAkh04/teeShop/main/src/assets/PicForHeader.svg" 
              alt="Header image" 
              className="headerImg"
            />


            <h1 className="headerText">Çay Society</h1>
        </div>
        <h1 className="typingText">
            Come to <TypingText />
        </h1>
        <div className="infoText">
          <h2>
            Test Test
          </h2>
        </div>
    </div>
  );
}

export default App;
