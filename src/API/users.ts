const API_URL = "https://fyp-server-bxs6.onrender.com/api";

let getUser = async () => {
  let token = localStorage.getItem("userToken")

  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      alert(`Failed to fetch user data: ${errorData.message}`);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    alert('An error occurred while fetching user data. Please try again.');
  }
}