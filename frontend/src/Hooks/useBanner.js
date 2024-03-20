import { useState, useEffect } from 'react';

// Custom hook for fetching banner data
const useBannerData = () => {
    const [bannerData, setBannerData] = useState({});

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/fetchheading');
                if (!response.ok) {
                    throw new Error('Failed to fetch banner data');
                }
                const data = await response.json();
                setBannerData(data);
                
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        };

        fetchBannerData();

        // Cleanup function (optional)
        return () => {
            // Cleanup logic if needed
        };
    }, []);

    // Return the banner data and the setter function
    return { bannerData, setBannerData };
};

export default useBannerData;
