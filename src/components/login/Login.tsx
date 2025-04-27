import { useState } from 'react';
import { loginUser } from '../../API/auth.ts';
import styles from "../../styles/login/login.module.css"

let Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await loginUser(email, password);
    setLoading(false);
  };
	
	return (
		<>
			<h2>Login</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="text"
          name="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
		</>
	)
}

export default Login;