import { useNavigate } from 'react-router-dom';
import styles from "../../styles/session/list.module.css"
import { Session } from "../../types/Session";

let SessionList = ({sessions, onClose}: {sessions: Session[], onClose: () => void}) => {
  const navigate = useNavigate();

  const handlePick = (session: Session) => {
    navigate('/study', { state: { session } });
    onClose(); // Close the modal after navigating
  };
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Available Sessions</h2>
        <ul className={styles.sessionList}>
          {sessions.map((session) => (
            <li key={session.id} className={styles.sessionItem}>
              <span>{session.name}</span>
              <button
                onClick={() => handlePick(session)}
                className={styles.chooseButton}
              >
                Choose
              </button>
            </li>
          ))}
        </ul>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  )
}

export default SessionList;