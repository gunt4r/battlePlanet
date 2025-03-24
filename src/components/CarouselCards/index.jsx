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

export default function CarouselCards() {
    return (
        <div className='section-carousel__cards' style={{ width: '100%', margin: '2rem auto 0 auto' }}>
            <Carousel
                items={images.map((src, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            backdropFilter: 'none',
                        }}
                    >
                        <img
                            src={src}
                            alt="carousel card"
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
                    spacing: 0,
                }}
            />
        </div>
    );
}
