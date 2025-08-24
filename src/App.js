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
              className="headerImg"/>
            <h1 className="headerText">Çay Society</h1>
        </div>
        <h1 className="typingText">
            Come to <TypingText />
        </h1>
        <div className="CurvedDiv1">
          <h2>Test Test</h2>
          <p>Lores bla bla blavb bla blavb blavb bla blavb blavb bla blavb blavb bla blavb</p>
            <svg viewBox="0 0 326 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M122.348 239.806C112.483 248.939 97.9762 250.971 85.981 244.899L82.7645 243.271C80.0678 241.906 77.5412 240.235 75.2752 238.235C64.8015 228.992 49.2793 213.567 53.4989 198.142C58.2121 180.912 87.5573 163.682 71.983 146.453C56.4088 129.223 -4.08486 111.993 0.218551 94.7635C4.52196 77.5338 73.6224 60.3041 89.5655 43.0743C114.512 16.0456 159.512 19.5992 190.67 37.2597C236.043 56.4278 282.923 32.9686 326 0C326 8.61486 326 25.8446 326 43.0743C326 60.3041 326 77.5338 326 94.7635C326 111.993 326 129.223 326 146.453C326 163.682 326 180.912 326 198.142C326 215.372 326 232.601 326 241.216V249.831L253.497 236.465C242.07 234.359 230.287 235.352 219.374 239.34L214.556 241.101C199.425 246.631 182.618 245.134 168.702 237.018L166.938 235.989C163.82 234.17 160.466 232.789 156.972 231.885L156.225 231.691C148.257 229.629 139.83 230.274 132.27 233.526L131.489 233.862C128.126 235.309 125.035 237.319 122.348 239.806V239.806Z" fill="#594E40"/>
            </svg>
        </div>
        <div className="CurvedDiv2">
        {/* <h2>Test Test</h2>
          <p>Lores bla bla blavb bla blavb blavb bla blavb blavb bla blavb blavb bla blavb</p> */}
          <table>
            <tr>
              <td>
                Hallo1
              </td>
            </tr>
            <tr>
              <td>
                <img></img>
              </td>
            </tr>
          </table>
        </div>
    </div>
  );
}

export default App;
