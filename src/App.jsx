import 'animate.css';
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState("");
  const [copy, setCopy] = useState(false)
  const changeBgColor = () => {
    setCopy(false)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
    document.body.style.backgroundColor = '#'+randomColor;
  };
  const copyToClipboard = () => {
    setCopy(true)
    window.navigator.clipboard.writeText('#'+bgColor)
  }
  useEffect(()=>{
    setBgColor('fff')
  },[]);
  return (
    <>
      <header className="col-6 mx-auto">
        <nav className="justify-content-center gap-3 d-flex w-100 align-items-center">
          <div className="btn-group shadow">
            <button
              onClick={changeBgColor}
              className="bg-gradient btn btn-primary btn-sm"
            >
              Generate
            </button>
            <button 
            onClick={copyToClipboard}
            className="btn btn-success btn-sm bg-gradient">{
              copy?<span className="">Copied <IoMdCheckmark /></span>:'Copy'
              }
            </button>
          </div>
        </nav>
      </header>
      <div className="text-center w-75 fw-semibold position-absolute translate-middle top-50 start-50 display-2">
        <div className={`${copy?'animate__animated animate__rubberBand':''}`}>
        #{bgColor}
        </div>
      </div>
      
    </>
  );
}

export default App;
