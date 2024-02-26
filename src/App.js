import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppSlider from './components/slider';
import AppServices from './components/services';
import AppTheme from './components/theme';
import AppTestimonials from './components/testimonials';
import AppSubscribe from './components/subscribe';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
<header>
  <AppHeader/>
</header>
<main>
  <AppHero/>
  <AppSlider/>
  <AppServices/>
  <AppTheme/>
  <AppTestimonials/>
  <AppSubscribe/>
</main>
<footer>
  <AppFooter/>
</footer>
    </div>
  );
}

export default App;
