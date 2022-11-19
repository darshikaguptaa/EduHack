import React, {  useEffect } from "react";
// import Free from "./components/Free";
import HomePage from "./HomePage";

import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  // const [theme, setTheme] = useState("dark");
  // const changeTheme = () => {
  //   theme === "dark" ? setTheme("light") : setTheme("dark");
  // };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={ <HomePage/> } />

    
   
      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
