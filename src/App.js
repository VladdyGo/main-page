import classes from "./App.module.css";
import Header from "./Components/UI/Header";
import Body from "./Components/UI/Body";
import { useState } from "react";

function App() {
  const [bodyContent, setBodyContent] = useState("None");

  const bodyContantHandler = (event) => {
    setBodyContent(event.target.innerText);
  };

  return (
    <div>
      <Header bodyContentHandler={bodyContantHandler} />
      <Body bodyContent={bodyContent} />
    </div>
  );
}

export default App;
