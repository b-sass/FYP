import styles from "../../styles/login/login.module.css"

let Login = () => {

	let submitForm = (event: React.FormEvent) => {
			event.preventDefault()
			window.location.href = "/dashboard"
			console.log("Form submitted")
	}
	
	return (
		<>
			<h2>Login</h2>
			<form onSubmit={submitForm} method="POST" className={styles.form}>
					<input type="text" name="username" placeholder="Username" required className={styles.input} />
					<input type="password" name="password" placeholder="Password" required className={styles.input} />
					<button type="submit" className={styles.button}>Login</button>
			</form>
		</>
	)
}

export default Login;