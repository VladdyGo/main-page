import classes from "./App.module.css";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Body from "./Components/UI/Body";
import { useState } from "react";

function App() {
  const [bodyContent, setBodyContent] = useState("None");
  console.log(window.innerHeight)

  const bodyContantHandler = (event) => {
    setBodyContent(event.target.innerText);
  };

  return (
    <div>
      <Header bodyContentHandler={bodyContantHandler} />
      <Body
        bodyContent={bodyContent}
      />
    </div>
  );
}

export default App;
