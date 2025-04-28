import { useState } from 'react';
import Navbar from '../ui/Navbar';
import styles from '../../styles/assignments/assignments.module.css';

const Assignments = () => {
  const [columns, setColumns] = useState<number[]>([1]); // Start with one column

  const addColumn = () => {
    setColumns((prev) => [...prev, prev.length + 1]);
  };

  return (
    <>
    <Navbar />

    <div className={styles.container}>
      <div className={styles.columns}>
        {columns.map((col, index) => (
          <div key={index} className={styles.column}>
            <h3>Column {col}</h3>
            <p>Content for column {col}</p>
          </div>
        ))}
        <div className={styles.addColumn} onClick={addColumn}>
          <span>+</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Assignments;