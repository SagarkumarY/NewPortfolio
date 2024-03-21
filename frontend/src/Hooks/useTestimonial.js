import { useState, useEffect } from 'react';

const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://sagars-portfolio.onrender.com/api/testimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTestimonials();

    // Cleanup function if needed
    return () => {
      // Any cleanup code goes here
    };
  }, []); // Empty dependency array to run effect only once

  return { testimonials, loading, error };
};

export default useTestimonials;
