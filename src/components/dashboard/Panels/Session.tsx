import { useState, useEffect } from "react";
import Button from "../../ui/Button";
import SessionList from "../../session/SessionList";
import { Session } from "../../../types/Session";
import { getSessions } from "../../../API/sessions.ts";

const handlePlanning = () => {
  window.ipcRenderer.send('open-planning');
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
  const [sessions, setSessions] = useState<Session[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await getSessions(); // Replace with your API call
        setSessions(response); // Assuming `response` is an array of sessions
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    fetchSessions();
  }, []);

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
        <SessionList sessions={sessions} onClose={closeModal} />
      )}
    </>
  );
};

export {SessionBegin, SessionPlan};