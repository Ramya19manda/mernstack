import React, { useEffect, useState } from "react";
import axios from "axios";  // ✅ Use axios for API requests
import "./DisasterList.css";

const DisasterList = () => {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await axios.get("http://localhost:5000/disasters");
        setDisasters(response.data); // ✅ Store API response in state
      } catch (error) {
        console.error("Error fetching disasters:", error);
      }
    };

    fetchDisasters();
  }, []);

  return (
    <div className="list-container">
      <h2 className="title">📍 Reported Disasters</h2>
      <ul className="disaster-list">
        {disasters.length === 0 ? (
          <p>No disasters reported yet.</p>
        ) : (
          disasters.map((d, i) => (
            <li key={i} className="disaster-card">
              <h3>{d.type} - <span className="location">{d.location}</span></h3>
              <p><strong>Severity:</strong> {d.severity}</p>
              <p className="description">{d.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DisasterList;
