import './HeroSection.css';

interface HeroSectionProps {
  heroImage: string;
  title: string;
  imageAlt?: string;
}

export default function HeroSection({ heroImage, title, imageAlt = 'Hero' }: HeroSectionProps) {
  return (
    <div className="hero-section-container">
      <div className="hero-background">
        <img src={heroImage} alt={imageAlt} className="hero-img" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
}

