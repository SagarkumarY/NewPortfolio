// src/hooks/useFetchSkills.js

import { useState, useEffect } from "react";

const useFetchSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("https://sagars-portfolio.onrender.com/api/skills");
        if (!response.ok) {
          throw new Error("Failed to fetch skills");
        }
        const data = await response.json();
        setSkills(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSkills();

    // Cleanup function
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return { skills, loading, error };
};

export default useFetchSkills;
