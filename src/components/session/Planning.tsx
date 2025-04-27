import { useState } from 'react';
import styles from '../../styles/session/planning.module.css';

let Planning = () => {
  const [sessionName, setSessionName] = useState('');
  const [sessionTarget, setSessionTarget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const cancelPlanning = () => {
    setSessionName('');
    setSessionTarget('');
    setStartDate('');
    setEndDate('');
    setTasks([]);
    setTask('');
  };

  const finishPlanning = () => {
    console.log({
      sessionName,
      sessionTarget,
      startDate,
      endDate,
      tasks,
    });
    alert('Session planning saved!');
    cancelPlanning();
  };

  return (
    <div className={styles.container}>
      <h1>Plan Your Study Session</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Session Name"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Session Target"
          value={sessionTarget}
          onChange={(e) => setSessionTarget(e.target.value)}
          className={styles.input}
        />
        <div className={styles.datePickers}>
          <div>
            <label className={styles.label}>Start Date and Time</label>
            <input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={styles.dateInput}
            />
          </div>
          <div>
            <label className={styles.label}>Expected End Date and Time</label>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={styles.dateInput}
            />
          </div>
        </div>
      </div>
      <div className={styles.taskGroup}>
        <input
          type="text"
          placeholder="Add a Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className={styles.input}
        />
        <button onClick={addTask} className={styles.addButton}>
          Add Task
        </button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((t, index) => (
          <li key={index} className={styles.taskItem}>
            {t}
          </li>
        ))}
      </ul>
      <div className={styles.buttonGroup}>
        <button onClick={cancelPlanning} className={styles.cancelButton}>
          Cancel
        </button>
        <button onClick={finishPlanning} className={styles.finishButton}>
          Finish Planning
        </button>
      </div>
    </div>
  );
}

export default Planning;