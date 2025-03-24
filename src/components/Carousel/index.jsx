import { useRef, useState } from 'react';
import image1 from '/assets/imageCarousel1.jpeg';
import image2 from '/assets/imageCarousel2.jpeg';
import image3 from '/assets/imageCarousel3.jpeg';
import image4 from '/assets/imageCarousel4.jpeg';
import image5 from '/assets/imageCarousel5.jpeg';
import image6 from '/assets/imageCarousel6.jpeg';
import image7 from '/assets/imageCarousel7.jpeg';
import image8 from '/assets/imageCarousel8.jpeg';
import image10 from '/assets/imageCarousel10.jpeg';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import './styleCarousel.scss';
import ImageGallery from 'react-image-gallery';
import { IoClose } from 'react-icons/io5';
import 'react-image-gallery/styles/css/image-gallery.css';
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image10,
];
const imagesGallery = images.map((src) => ({
  original: src,
  thumbnail: src,
}));
export default function CarouselComponent() {
  const cardRefs = useRef([]);
  const refGallery = useRef(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleGallery = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };
  const categoryDisappear = () => {
    const galleryElement = refGallery.current;
    galleryElement.style.animation = `disappear 1s ease`;
    setTimeout(() => {
      setShowGallery(false);
    }, 1000);
  }
  return (
    <div
      className="section-carousel"
      style={{ width: '100%', margin: '0 auto' }}
    >
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
            onClick={() => handleGallery(index)}
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
      {showGallery && (
        <div className={`section-carousel__gallery`} style={{
          animation: !showGallery ? "disappear 1s ease" : "appear 1s ease"
        }} ref={refGallery} onClick={() => categoryDisappear()}>
          <div
            className="section-carousel__gallery__close"
            onClick={() => categoryDisappear()}
          >
            <IoClose size={30} />
          </div>
          <div className='section-carousel__gallery__images' onClick={(e) => e.stopPropagation()}>
          <ImageGallery
            items={imagesGallery}
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={currentIndex}
          />
          </div>
        </div>
      )}
    </div>
  );
}
