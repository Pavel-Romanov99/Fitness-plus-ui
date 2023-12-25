import './App.css';
import NavBar from './Components/NavBar';
import GymCard from './Components/GymCard';
import * as GymService from './Service/GymCardService'
import { useEffect, useState } from 'react';

function App() {

  const [studios, setStudios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GymService.getStudios();
        setStudios(result);
        console.log(result)
      } catch (error) {
        console.error('Error fetching studios:', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
       <NavBar></NavBar>
       <div id='container'>
          <h1>Fitness studios in your area!</h1>
          <div id='gym-card-container'>
            {studios.map((studio) => (

                <GymCard key={studio.studioId} studioName={studio.studioName} address={studio.address} description={studio.description}></GymCard>
            ))}
          </div>  
       </div>
      </header>
    </div>
  );
}

export default App;
