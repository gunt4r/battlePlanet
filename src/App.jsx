import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Gameplay from './components/Gameplay';
import './App.scss'
function App() {
  return (
    <main className="App">
      <Hero />
      <About />
      <Gameplay />
      <Footer />
    </main>
  );
}

export default App;
