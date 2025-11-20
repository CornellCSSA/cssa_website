import './Home.css'; // Importing from the styles folder

// Importing images
import cover2 from '../../assets/cover2.jpg';
import homeEvent1 from '../../assets/home-events-1.jpg';
import homeEvent2 from '../../assets/home-events-2.jpg';
import homeEvent3 from '../../assets/home-events-3.jpg';
import homeEvent4 from '../../assets/home-events-4.jpg';
import homeEvent5 from '../../assets/home-events-5.jpg';
import homeEvent6 from '../../assets/home-events-6.jpg';

export default function Home () {
  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="home-hero-background">
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

      <div className="events-section">
        <div className="events-header">
          <h1 className='events-title-text'>活动</h1>
        </div>
        <div className="events-description">
          <p className='events-content-text'>
            我们致力于促进康奈尔中国学生群体之间的交流，弘扬中华文化，每年举办如中秋嘉年华、春晚等文化类活动，好声音、运动季等娱乐类活动，以及求职、接机等服务类活动。
          </p>
        </div>

        {/* Events Image Grid Section */}
        <div className="events-grid-section">
          <div className="events-grid">
            <div className="event-image-wrapper">
              <img src={homeEvent1} alt="Event 1" className="event-image" />
            </div>
            <div className="event-image-wrapper">
              <img src={homeEvent2} alt="Event 2" className="event-image" />
            </div>
            <div className="event-image-wrapper">
              <img src={homeEvent3} alt="Event 3" className="event-image" />
            </div>
            <div className="event-image-wrapper">
              <img src={homeEvent4} alt="Event 4" className="event-image" />
            </div>
            <div className="event-image-wrapper">
              <img src={homeEvent5} alt="Event 5" className="event-image" />
            </div>
            <div className="event-image-wrapper">
              <img src={homeEvent6} alt="Event 6" className="event-image" />
            </div>
          </div>
        </div>
        <button className="events-button">
          了解更多
        </button>
      </div>
    </div>
  );
};