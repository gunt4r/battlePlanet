import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import CarouselComponent from './components/Carousel';
import Gameplay from './components/Gameplay';
import CarouselCards from './components/CarouselCards';
import './App.scss'
function App() {
  return (
    <main className="App">
      <Hero />
      <About />
      <CarouselComponent />
      <Gameplay />
      {/* <CarouselCards /> */}
      <Footer />
    </main>
  );
}

export default App;
