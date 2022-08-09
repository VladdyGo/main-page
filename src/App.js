import Header from "./Components/MainSections/HeaderSection/Header";
import Body from "./Components/MainSections/BodySection/Body";
import Footer from "./Components/MainSections/FooterSection/Footer";
import style from './App.module.css';

import font from './Fonts/fonts.module.css';

import { useState } from "react";

function App() {
  const [bodyContent, setBodyContent] = useState("None");
  const [activeMobileMenu,setActiveMobileMenu] = useState(false);

  const closeMobileMenu = (event) => {
    if(activeMobileMenu)
      setActiveMobileMenu(false);
  };

  const bodyContantHandler = (event) => {
    setBodyContent(event.target.innerText);
  };

  return (
    <div className={`${style.theMainStyle} ${font.fontQuantico}`} onClick={closeMobileMenu}>
      <Header bodyContentHandler={bodyContantHandler} activeMobileMenuStatus={[activeMobileMenu,setActiveMobileMenu]} />
      <Body bodyContent={bodyContent} />
      <Footer/>
    </div>
  );
}

export default App;
