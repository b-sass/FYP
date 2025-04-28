import { useState } from "react";
import Button from "../../ui/Button";
import SessionList from "../../session/SessionList";
import { Session } from "../../../types/Session";

const handlePlanning = () => {
  window.ipcRenderer.send('open-planning');
};

const handleSession = () => {
  window.ipcRenderer.send('open-session');
};

const handlePick = () => {
  
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([
    { id: "1", name: 'Math Study Session', startDate: new Date().toString(), endDate: new Date().toString()},
    { id: "2", name: 'Science Revision', startDate: new Date().toString(), endDate: new Date().toString()},
    { id: "3", name: 'History Notes Review', startDate: new Date().toString(), endDate: new Date().toString()},
  ]); // Replace this with API data

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return(
    <>
      <Button title="Begin Study Session" onClick={openModal}></Button>
      <p>Tasks to complete:</p>
      <ul>
        <li style={{"color": "#FCADAE"}}><p>Research Topic</p></li>
        <li style={{"color": "#FCADAE"}}><p>Complete question 1</p></li>
        <li style={{"color": "#FCADAE"}}><p>Read book</p></li>
      </ul>

      {isModalOpen && (
        <SessionList sessions={sessions} onPick={handlePick} onClose={closeModal} />
      )}
    </>
  );
};

export {SessionBegin, SessionPlan};