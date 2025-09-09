import './Home.css'; // Importing from the styles folder

// Importing images
import cover2 from '../../assets/cover2.jpg';

export default function Home () {
  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="hero-background">
          <img src={cover2} alt="Cover" className="cover-img" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title-chinese">康奈尔大学中国学生学者联合会</h1>
          <h2 className="hero-title-english">Cornell CSSA</h2>
          <p className="hero-subtitle">Cornell Chinese Students and Scholars Association</p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-title">
          <h1 className='about-title-text'>关于CSSA</h1>
        </div>
        <div className="about-content">
          <p className='about-content-text'>
            康奈尔大学中国学生学者联合会，英文简称Cornell CSSA，
            是由康奈尔中国学生群体组成的非盈利性互助服务组织，
            是康奈尔大学唯一受中国驻美使馆认证的社团。
          </p>
        </div>
      </div>

      {/* Additional content for the home page would go here */}
    </div>
  );
};