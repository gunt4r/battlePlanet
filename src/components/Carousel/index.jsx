import { useRef } from 'react';
import image1 from '@assets/imageCarousel1.jpeg';
import image2 from '@assets/imageCarousel2.jpeg';
import image3 from '@assets/imageCarousel3.jpeg';
import image4 from '@assets/imageCarousel4.jpeg';
import image5 from '@assets/imageCarousel5.jpeg';
import image6 from '@assets/imageCarousel6.jpeg';
import image7 from '@assets/imageCarousel7.jpeg';
import image8 from '@assets/imageCarousel8.jpeg';
import image9 from '@assets/imageCarousel9.jpeg';
import image10 from '@assets/imageCarousel10.jpeg';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import './styleCarousel.scss';

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
];

export default function CarouselComponent() {
  const cardRefs = useRef([]);

  return (
    <div className='section-carousel' style={{ width: '100%', margin: '0 auto' }}>
      <Carousel
        items={images.map((src, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              width: '400px',
              height: '150px',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src={src}
              alt="image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease', 
              }}
            />
          </div>
        ))}
        startIndex={0}
        swipeable
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        defaultOption={{
          angleFactor: 2,
          depthFactor: 1.2,
          animationSpeed: 500,
          visibleCount: 3,
          border: 0,
        }}
        onClickItem={(_, index) => {
          const cardElement = cardRefs.current[index];
          if (cardElement) {
            cardElement.classList.add('zoomed');
            setTimeout(() => {
              cardElement.classList.remove('zoomed');
            }, 600);
          }
        }}
      />
    </div>
  );
}
