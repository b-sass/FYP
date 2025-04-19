import Button from "../../ui/Button";

let SessionPlan = () => {
  return(
    <div>
      <Button title="Plan Study Session"/>
      <p>Next study session on:</p>
      <p style={{"color": "#F7FCAD"}}>23rd of December</p>
      <p style={{"color": "#F7FCAD"}}>16:00</p>
    </div>
  );
};

let SessionBegin = () => {
  return(
    <div>
      <Button title="Begin Study Session"></Button>
      <p>Tasks to complete:</p>
      <ul>
        <li style={{"color": "#FCADAE"}}><p>Research Topic</p></li>
        <li style={{"color": "#FCADAE"}}><p>Complete question 1</p></li>
        <li style={{"color": "#FCADAE"}}><p>Read book</p></li>
      </ul>
    </div>
  );
};

export {SessionBegin, SessionPlan};