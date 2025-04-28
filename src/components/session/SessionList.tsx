import styles from "../../styles/session/list.module.css"
import { Session } from "../../types/Session";

let SessionList = ({sessions, onPick, onClose}: {sessions: Session[], onPick: () => void, onClose: () => void}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Available Sessions</h2>
        <ul className={styles.sessionList}>
          {sessions.map((session) => (
            <li key={session.id} className={styles.sessionItem}>
              <span>{session.name}</span>
              <button
                onClick={onPick}
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