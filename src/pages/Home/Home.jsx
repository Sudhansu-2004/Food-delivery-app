import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const location = useLocation();
  const [category, setCategory] = useState("All");
  
  const message = location.state?.message;

  const [showMessage, setShowMessage] = useState(!!message);

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="home">
      <Header />

      {/* Display the success message if available  */}
      {showMessage && (
        <div className="alert-message" role="alert" aria-live="assertive">
          {message}
        </div>
      )}

      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
