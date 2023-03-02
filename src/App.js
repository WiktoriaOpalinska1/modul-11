import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import { Routes, Route} from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage.js';

const App = () => {
  return(
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />}  />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />   
        </Routes>
      </Container>
 </main>
  );
};

export default App;
