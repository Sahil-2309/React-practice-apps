import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tou) => tou.id !== id);
    setTours(newTours);
  };
  const fecthTours = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const response = await fetch(url);
        const tour = await response.json();
        setLoading(false);
        setTours(tour);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fecthTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <Tours tou={tours} removeTour={removeTour} />
      </main>
    );
  }
}

export default App;
