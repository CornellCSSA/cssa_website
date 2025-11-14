import './Guide.css';
import HeroSection from '../../components/HeroSection';
import guideHeroImage from '../../assets/guide-hero.jpg';
import guideCover from '../../assets/guide.jpg';

export default function Guide() {
  return (
    <div>
      <HeroSection heroImage={guideHeroImage} title="康村指南" />
      <div className="guide-container">
        <h2 className="guide-heading">新生手册</h2>
        <img src={guideCover} alt="Guide Cover" className="guide-cover-img" />
      </div>
    </div>
  );
}