import styles from "../../styles/login/login.module.css"

let Login = () => {

	let submitForm = (event: React.FormEvent) => {
			event.preventDefault()
			window.location.href = "/dashboard"
			console.log("Form submitted")
	}
	
	return (
			<div className={styles.container}>
					<h1>Welcome to Study App</h1>
					<h2>Please login to continue</h2>
					<form onSubmit={submitForm} method="POST" className={styles.form}>
							<input type="text" name="username" placeholder="Username" required className={styles.input} />
							<input type="password" name="password" placeholder="Password" required className={styles.input} />
							<button type="submit" className={styles.button}>Login</button>
					</form>
					<div className={styles.linksContainer}>
							<a href="/register" className={styles.link}>Register here</a>
							<span className={styles.divider}>|</span>
							<a href="/reset-password" className={styles.link}>Reset password</a>
					</div>
			</div>
	)
}

export default Login;