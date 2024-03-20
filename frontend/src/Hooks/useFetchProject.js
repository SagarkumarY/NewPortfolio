import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {

      try {
        const response = await axios.get('http://localhost:3000/api/projects');
        // setProjects(response.data.projectCards);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        
      }finally{
        setLoading(false);
      }
    };

    fetchProjects();

    // Cleanup function (optional)
    return () => {
      // Cleanup logic here (if needed)
    };
  }, []);

  return { projects, loading };
};

export default useFetchProjects;
