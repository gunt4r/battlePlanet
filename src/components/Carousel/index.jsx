import image1 from '@assets/imageCarousel1.jpeg'
import image2 from '@assets/imageCarousel2.jpeg'
import image3 from '@assets/imageCarousel3.jpeg'
import image4 from '@assets/imageCarousel4.jpeg'
import image5 from '@assets/imageCarousel5.jpeg'
import image6 from '@assets/imageCarousel6.jpeg'
import image7 from '@assets/imageCarousel7.jpeg'
import image8 from '@assets/imageCarousel8.jpeg'
import image9 from '@assets/imageCarousel9.jpeg'
import image10 from '@assets/imageCarousel10.jpeg'
import { Carousel } from 'react-responsive-3d-carousel'
import 'react-responsive-3d-carousel/dist/styles.css'
import './styleCarousel.scss'
const images = [
  <img src={image1} alt="image" />,
  <img src={image2} alt="image" />,
  <img src={image3} alt="image" />,
  <img src={image4} alt="image" />,
  <img src={image5} alt="image" />,
  <img src={image6} alt="image" />,
  <img src={image7} alt="image" />,
  <img src={image8} alt="image" />,
  <img src={image9} alt="image" />,
  <img src={image10} alt="image" />
]

export default function CarouselComponent() {
  return (
    <div 
      style={{
        width: '100%',    
        margin: '0 auto'
      }}
    >
      <Carousel
        items={images}
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
          itemWidth: 400,
          itemHeight: 250
        }}
      />
    </div>
  )
}
