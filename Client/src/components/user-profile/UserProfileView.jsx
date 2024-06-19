import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./userprofile.css";

const UserProfileView = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/v1/users/profile");
        setUser(response.data);
        setFormData(response.data); // Initializing form data with user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/v1/users/profile", formData); // Adjusting the API endpoint as needed
      setUser(formData); // Updating user state with edited data
      setEditMode(false); // Exiting edit mode
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setFormData(user); // Reseting form data to current user data if canceling edit
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleEditMode}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="profile-details">
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <button className="btn btn-primary" onClick={toggleEditMode}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileView;
