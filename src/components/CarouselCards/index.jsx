import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import './styleCarouselCards.scss';

const images = [
    '/assets/CarouselCards/Acropolis.png',
    '/assets/CarouselCards/Beacon.png',
    '/assets/CarouselCards/Bigbang.png',
    '/assets/CarouselCards/Blackhole.png',
    '/assets/CarouselCards/Breakthrough.png',
    '/assets/CarouselCards/ClimaticWeapons.png',
    '/assets/CarouselCards/Coliseum.png',
    '/assets/CarouselCards/Dreadnought.png',
    '/assets/CarouselCards/PoleChange.png',
    '/assets/CarouselCards/Sacrifice.png',
    '/assets/CarouselCards/Spoilage.png',
    '/assets/CarouselCards/StarBirth.png',
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
