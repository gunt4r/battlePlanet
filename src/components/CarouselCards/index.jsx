import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import './styleCarouselCards.scss';

const images = [
  '/assets/CarouselCards/Acropolis.webp',
  '/assets/CarouselCards/Beacon.webp',
  '/assets/CarouselCards/Bigbang.webp',
  '/assets/CarouselCards/Blackhole.webp',
  '/assets/CarouselCards/Breakthrough.webp',
  '/assets/CarouselCards/ClimaticWeapons.webp',
  '/assets/CarouselCards/Coliseum.webp',
  '/assets/CarouselCards/Dreadnought.webp',
  '/assets/CarouselCards/PoleChange.webp',
  '/assets/CarouselCards/Sacrifice.webp',
  '/assets/CarouselCards/Spoilage.webp',
  '/assets/CarouselCards/StarBirth.webp',
];

export default function CarouselCards({ styles }) {
  return (
    <div className="section-carousel__cards" style={{ ...styles }}>
      <Carousel
        items={images.map((src, index) => (
          <div
            key={index}
            className='section-carousel__cards--card'
          >
            <img
              src={src}
              alt="carousel card"
              className='section-carousel__cards--card--img'
            />
          </div>
        ))}
        startIndex={0}
        swipeable={true}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        boxShadow="none"
        defaultOption={{
          angleFactor: 2,
          depthFactor: 1.2,
          animationSpeed: 500,
          visibleCount: 3,
          border: 0,
          spacing: 0,
        }}
      />
    </div>
  );
}
