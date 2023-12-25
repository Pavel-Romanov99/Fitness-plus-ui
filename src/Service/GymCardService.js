const url = 'http://localhost:8080/studios'


  export async function getStudios() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const studios = await response.json();
      return studios;
    } catch (error) {
      console.error('Error fetching studios:', error.message);
      throw error;
    }
  }
  