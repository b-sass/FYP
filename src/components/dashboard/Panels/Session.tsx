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

      {isModalOpen && (
        <SessionList sessions={sessions} onClose={closeModal} />
      )}
    </>
  );
};

export {SessionBegin, SessionPlan};