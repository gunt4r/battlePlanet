import image1 from '@assets/CarouselCards/Acropolis.png';
import image2 from '@assets/CarouselCards/Beacon.png';
import image3 from '@assets/CarouselCards/BigBang.png';
import image4 from '@assets/CarouselCards/Blackhole.png';
import image5 from '@assets/CarouselCards/Breakthrough.png';
import image6 from '@assets/CarouselCards/ClimaticWeapons.png';
import image7 from '@assets/CarouselCards/Coliseum.png';
import image8 from '@assets/CarouselCards/Dreadnought.png';
import image9 from '@assets/CarouselCards/PoleChange.png';
import image10 from '@assets/CarouselCards/Sacrifice.png';
import image11 from '@assets/CarouselCards/Spoilage.png';
import image12 from '@assets/CarouselCards/StarBirth.png';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import './styleCarouselCards.scss';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

export default function CarouselCards() {
  return (
    <div className='section-carousel__cards' style={{ width: '100%', margin: '0 auto' }}>
      <Carousel
        items={images.map((src, index) => (
            <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              background: 'transparent !important', 
              border: 'none !important',
              outline: 'none !important',
              boxShadow: 'none !important', 
              backdropFilter: 'none !important', 
            }}
          >
            <img
              src={src}
              alt="image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block', 
                padding: 0, 
                margin: 0, 
                border: 'none', 
              }}
            />
          </div>
        ))}
        startIndex={0}
        swipeable={true}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        boxShadow='none'
        defaultOption={{
          angleFactor: 2,
          depthFactor: 1.2,
          animationSpeed: 500,
          visibleCount: 3,
          border: 0,
          spacing:0
        }}
      />
    </div>
  );
}
