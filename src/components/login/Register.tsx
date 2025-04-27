import styles from "../../styles/login/login.module.css";

const Register = () => (
  <>
    <h2>Register to get started</h2>
    <form method="POST" className={styles.form}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className={styles.input}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Register
      </button>
    </form>
  </>
);

export default Register;