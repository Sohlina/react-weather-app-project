import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">  
      <Weather defaultCity="Queenstown" />
      <footer>
      This project is <a href="https://github.com/Sohlina/react-weather-app-project" target="_blank" rel="noreferrer"> Open-sourced on Github </a><a href="https://jovial-aryabhata-bbec83.netlify.app/" target="_blank" rel="noreferrer"></a>, coded by Alexandra Sohlin 👩🏽‍💻
    </footer>
    </div>
  </div>
  );
}
