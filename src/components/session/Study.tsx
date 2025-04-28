import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSession } from '../../API/sessions';
import styles from '../../styles/session/study.module.css';

let Study = () => {
  const location = useLocation();
  const { session } = location.state;

  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [tasks, setTasks] = useState(session.tasks || []);
  const [timerType, setTimerType] = useState<'study' | 'break'>('study'); // Track current timer type

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (timerType === 'study') {
        alert('Study time is up! Starting a 5-minute break.');
        setTimerType('break');
        setTimeLeft(5 * 60); // Set break timer to 5 minutes
        setIsRunning(true); // Automatically start the break timer
      } else {
        alert('Break time is up! Back to study.');
        setTimerType('study');
        setTimeLeft(25 * 60); // Reset study timer to 25 minutes
        setIsRunning(true); // Automatically start the study timer
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const finishSession = async () => {
    const remainingTasks = tasks.filter((task: any) => !task.completed);
    if (remainingTasks.length > 0) {
      const confirmCancel = window.confirm(
        `There are ${remainingTasks.length} tasks left. Do you want to cancel the session?`
      );
      if (!confirmCancel) {
        return;
      }
    }
    await updateSession(session)
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h2>Session Details</h2>
        <p><strong>Name:</strong> {session.name}</p>
        <p><strong>Target:</strong> {session.target}</p>
        <p><strong>Start Date:</strong> {session.startDate}</p>
        <p><strong>End Date:</strong> {session.endDate}</p>
        <h3>Tasks</h3>
        <ul className={styles.taskList}>
          {tasks.map((task: any, index: number) => (
            <li key={index} className={styles.taskItem}>
              <span>{task.name}</span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  const updatedTasks = [...tasks];
                  updatedTasks[index].completed = !updatedTasks[index].completed;
                  setTasks(updatedTasks);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightColumn}>
      <h2>{timerType === 'study' ? 'Study Timer' : 'Break Timer'}</h2>
        <div className={styles.timer}>{formatTime(timeLeft)}</div>
        <div className={styles.timerControls}>
          <button onClick={toggleTimer} className={styles.button}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={finishSession} className={styles.button}>Finish Session</button>
        </div>
      </div>
    </div>
  );
};

export default Study;