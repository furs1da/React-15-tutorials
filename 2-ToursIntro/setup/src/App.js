import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = setState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await fetch.json();
    console.log(tours);
  }

  useEffect(() => {
    
  })

  if(loading)
  {
    return <main>
      <Loading/>
    </main>;
  }
  else
  {
    return <main>
      <Tours/>
    </main>
  }
}

export default App
