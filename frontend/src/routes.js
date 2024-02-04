import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import StarGazing from './pages/StarGazing';
import Quiz from './pages/Quiz';
import WeatherForecast from './pages/WeatherForecast';
import NasaAPOD from './pages/NasaAPOD';
import ConstellationFinder from './pages/ConstellationFinder';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About /> },
  { path: '/contact', component: <Contact /> },
  { path: '/stargazing', component: <StarGazing />},
  { path: '/weatherforecast', component: <WeatherForecast />},
  { path: '/constellationfinder', component: <ConstellationFinder />},
  { path: '/nasaapod', component: <NasaAPOD />},
  { path: '/quiz', component: <Quiz />}
];

export default routes;