import Navbar from "./components/navbar";
import "./App.css"
import headerImg from "./assets/PicForHeader.svg"; 
import TypingText from "./components/typingText"; 



function App() {
  return (
    <div className="app">
        <div className="headerWrapper">
            <img src={headerImg} className="headerImg" />
            <h1 className="headerText">Çay Society</h1>
        </div>

      {/* <Navbar /> */}
        <h1 className="typingText">
            Come to <TypingText />
        </h1>

      
    </div>
  );
}

export default App;
