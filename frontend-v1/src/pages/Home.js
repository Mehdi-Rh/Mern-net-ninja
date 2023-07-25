import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();
      if (response.ok) console.log("json", json);
      console.log("response", response);
    };

    fetchWorkouts();
  }, []);
  return <div>Home</div>;
};

export default Home;
