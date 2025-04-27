import Button from "../../ui/Button";

const handlePlanning = () => {
  window.ipcRenderer.send('open-planning');
};

const handleSession = () => {
  window.ipcRenderer.send('open-session');
};

let SessionPlan = () => {
  return(
    <>
      <Button title="Plan Study Session" onClick={handlePlanning} />
      <p>Next study session on:</p>
      <p style={{"color": "#F7FCAD"}}>23rd of December</p>
      <p style={{"color": "#F7FCAD"}}>16:00</p>
    </>
  );
};

let SessionBegin = () => {
  return(
    <>
      <Button title="Begin Study Session" onClick={handleSession}></Button>
      <p>Tasks to complete:</p>
      <ul>
        <li style={{"color": "#FCADAE"}}><p>Research Topic</p></li>
        <li style={{"color": "#FCADAE"}}><p>Complete question 1</p></li>
        <li style={{"color": "#FCADAE"}}><p>Read book</p></li>
      </ul>
    </>
  );
};

export {SessionBegin, SessionPlan};