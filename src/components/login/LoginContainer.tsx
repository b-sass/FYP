import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import styles from '../../styles/login/loginContainer.module.css';

let LoginContainer = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Study App</h1>

      {isLoginView ? <Login /> : <Register />}

      <div className={styles.linksContainer}>
        {
          isLoginView ? (
            <span className={styles.link} onClick={toggleView}>
              Don't have an account? Register here
            </span>
          ) : (
            <span className={styles.link} onClick={toggleView}>
              Already have an account? Login here
            </span>
          )
        }
        <span className={styles.divider}>|</span>
        <a href="/reset-password" className={styles.link}>Reset password</a>
      </div>
    </div>
  );
};

export default LoginContainer;