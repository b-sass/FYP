const API = "https://fyp-server-bxs6.onrender.com/api";

let loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(API + "/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Login successful!');
      localStorage.setItem('token', data.userToken);
      window.location.href = "/dashboard";
    } else {
      const errorData = await response.json();
      alert(`Login failed: ${errorData.message}`);
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred. Please try again.');
  }
};

export { loginUser };