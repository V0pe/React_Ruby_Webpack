const api = {
    fetchRandomMessage: async () => {
      try {
        const response = await fetch("http://localhost:3000/greeting");
        const { msg } = await response.json();
        return msg;
      } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error fetching random message:", error);
        throw error;
      }
    },
  };
  
  export default api;