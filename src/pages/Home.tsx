import React from 'react';
import '../styles/Home.css'; // Importing from the styles folder
import coverAcapella from '../assets/cover-acappella.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="hero-background">
          <img src={coverAcapella} alt="Cover Acapella" className="cover-img" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title-chinese">康奈尔大学中国学生学者联合会</h1>
          <h2 className="hero-title-english">Cornell CSSA</h2>
          <p className="hero-subtitle">Cornell Chinese Students and Scholars Association</p>
        </div>
      </div>

      {/* Additional content for the home page would go here */}
    </div>
  );
};

export default Home;