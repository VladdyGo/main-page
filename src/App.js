import classes from "./App.module.css";
import Header from "./Components/UI/Header";
import Body from "./Components/UI/Body";
import { useState } from "react";

function App() {
  const [bodyContent, setBodyContent] = useState("None");
  let currentpageLocation = 0;

  const bodyContantHandler = (event) => {
    setBodyContent(event.target.innerText);
  };

  const sayHello = (event) => {
      if(currentpageLocation < window.pageYOffset){
        window.scrollBy({
          top: 600,
          left: 0,
          behavior: 'smooth'
        });
      } else if(currentpageLocation > window.pageYOffset){
        window.scrollBy({
          top: -600,
          left: 0,
          behavior: 'smooth'
        });
      }
      currentpageLocation = window.pageYOffset;
    }

  return (
    <div onTouchMove={sayHello} onWheel={sayHello}>
      <Header bodyContentHandler={bodyContantHandler} />
      <Body bodyContent={bodyContent} />
    </div>
  );
}

export default App;
