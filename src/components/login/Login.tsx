let Login = () => {

	let submitForm = (event: React.FormEvent) => {
		event.preventDefault()
		window.location.href = "/dashboard"
		console.log("Form submitted")
	}
	
	return (
		<div>
			<h1>Welcom to Study App</h1>
			<h2>Please login to continue</h2>
			<form onSubmit={submitForm} method="POST">
				<input type="text" name="username" placeholder="Username" required />
				<input type="password" name="password" placeholder="Password" required />
				<button type="submit">Login</button>
			</form>
			<p>Don't have an account? <a href="/register">Register here</a></p>
			<p>Forgot your password? <a href="/reset-password">Reset it here</a></p>
		</div>
	)
}

export default Login;