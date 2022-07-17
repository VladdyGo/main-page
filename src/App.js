import Header from "./Components/UI/Header";
import Body from "./Components/UI/Body";
import Footer from "./Components/UI/Footer";
import style from './App.module.css';

import { useState } from "react";

function App() {
  const [bodyContent, setBodyContent] = useState("None");
  let currentpageLocation = 0;

  const bodyContantHandler = (event) => {
    setBodyContent(event.target.innerText);
  };

  const mobileScrolling = (event) => {
      if(currentpageLocation < window.pageYOffset){
        window.scrollBy({
          top: 600,
          left: 0,
          behavior: 'smooth'
        });
        currentpageLocation = window.pageYOffset;
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
    <div className={style.theMainFont} onTouchMove={mobileScrolling}>
      <Header bodyContentHandler={bodyContantHandler} />
      <Body bodyContent={bodyContent} />
      <Footer/>
    </div>
  );
}

export default App;
