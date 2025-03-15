import React, { useState } from "react";
import "./ReportDisaster.css";

const ReportDisaster = () => {
  // State for form data
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    severity: "",
    description: "",
  });

  // State for showing a success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: all fields must be filled
    if (
      !formData.type ||
      !formData.location ||
      !formData.severity ||
      !formData.description
    ) {
      alert("Please fill out all fields!");
      return;
    }

    // Log the form data (you could also send this data to an API)
    console.log("Disaster Reported:", formData);

    // Show success message
    setSuccessMessage("Disaster reported successfully!");

    // Clear the form
    setFormData({
      type: "",
      location: "",
      severity: "",
      description: "",
    });

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="container">
      <h2 className="title">🌍 Real-Time Disaster Tracking</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            name="type"
            placeholder="Disaster Type (e.g., Flood, Earthquake)"
            value={formData.type}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="input"
          />
        </div>

        <select
          name="severity"
          value={formData.severity}
          onChange={handleChange}
          className="select"
        >
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <textarea
          name="description"
          placeholder="Detailed Description..."
          rows="4"
          value={formData.description}
          onChange={handleChange}
          className="textarea"
        ></textarea>

        <button type="submit" className="button">
          🚨 Report Disaster
        </button>
      </form>
    </div>
  );
};

export default ReportDisaster;
