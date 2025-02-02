import Calendar from "./components/Calendar";
import Todo from "./components/Todo";
import Session from "./components/Session/Session"
import Record from "./components/Record";

import "./App.css";

function App() {

  return (
    <>
      <div className="container">
        <Session />
      </div>      
      <div className="container">
        <Calendar />
      </div>
      <div className="container">
        <Todo />
        <Record />
      </div>
    </>
  )
}

export default App;
