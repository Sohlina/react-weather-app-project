import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">  
      <Weather defaultCity="Queenstown" />
      <footer>
      <a href="https://github.com/Sohlina/react-weather-app-project" target="_blank" rel="noreferrer">Open-source code</a><small>, by Alexandra Sohlin</small>
    </footer>
    </div>
  </div>
  );
}
