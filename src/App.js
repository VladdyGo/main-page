import Header from "./Components/UI/Header";
import Body from "./Components/UI/Body";
import Footer from "./Components/UI/Footer";
import style from './App.module.css';

import font from './Fonts/fonts.module.css';

import { useState } from "react";

function App() {
  const [bodyContent, setBodyContent] = useState("None");

  const bodyContantHandler = (event) => {
    setBodyContent(event.target.innerText);
  };

  return (
    <div className={`${style.theMainStyle} ${font.fontQuantico}`}>
      <Header bodyContentHandler={bodyContantHandler} />
      <Body bodyContent={bodyContent} />
      <Footer/>
    </div>
  );
}

export default App;
