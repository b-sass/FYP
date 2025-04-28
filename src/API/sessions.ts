import { Task, Session } from "../types/Session";
const API = "https://fyp-server-bxs6.onrender.com/api";

export let getSessions = async () => {
  let token = localStorage.getItem("token");

  try {
    const response = await fetch(`${API}/session`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.sessions;
    } else {
      const errorData = await response.json();
      alert(`Failed to fetch sessions: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error fetching sessions:", error);
    alert("An error occurred while fetching sessions. Please try again.");
  }
}

export let createSession = async (
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
        "name": sessionName,
        "target": sessionTarget,
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

export let updateSession = async (session: Session) => {
  console.log(session)
  try {
    const response = await fetch(`${API}/session`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ 
        "id": session._id,
        "name": session.name,
        "target": session.target,
        "startDate": session.startDate,
        "endDate": session.endDate,
        "tasks": session.tasks,
      }),
    });

    if (response.ok) {
      alert('Session tasks updated successfully!');
      window.location.href = "/dashboard";
    } else {
        const errorData = await response.json();
        alert(`Failed to update session tasks: ${errorData.message}`);
      }
  } catch (error) {
    console.error('Error updating session tasks:', error);
    alert('An error occurred. Please try again.');
  }
}