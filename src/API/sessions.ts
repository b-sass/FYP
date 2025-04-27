const API = "https://fyp-server-bxs6.onrender.com/api";

let createSession = async (
  sessionName: string,
  sessionTarget: string,
  startDate: string,
  endDate: string,
  tasks: { name: string; priority: string }[]
) => {
  let token = localStorage.getItem("token");

  try {
    const response = await fetch(`${API}/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        sessionName,
        sessionTarget,
        startDate,
        endDate,
        tasks,
      }),
    });

    if (response.ok) {
      alert("Session created successfully!");
      window.location.href = "/dashboard";
    } else {
      const errorData = await response.json();
      alert(`Failed to create session: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error creating session:", error);
    alert("An error occurred while creating the session. Please try again.");
  }
};

export { createSession };