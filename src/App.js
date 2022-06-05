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
      if(currentpageLocation > window.pageYOffset){
        window.scrollBy(0,600);
      } else if(currentpageLocation < window.pageYOffset){
        window.scrollBy(0,-600);
      }
      currentpageLocation = window.pageYOffset;
    }

  return (
    <div onWheel={sayHello}>
      <Header bodyContentHandler={bodyContantHandler} />
      <Body bodyContent={bodyContent} />
    </div>
  );
}

export default App;
