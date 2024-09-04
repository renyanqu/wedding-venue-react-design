import { useState } from 'react'
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import FoodDrinks from './FoodDrinks';
import WeddingOptions from './WeddingOptions';
import './index.css';

function App() {
  const [currentPage, setPage] = useState('Home');
  const navigateToPage = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className='header'>
      <Header/>
      <NavBar setPage={setPage} />
      </div>
      {currentPage === 'Home' && <Home navigateToPage={navigateToPage} />}
      {currentPage === 'Wedding Options' && <WeddingOptions navigateToPage={navigateToPage} />}
      {currentPage === 'Food&Drinks' && <FoodDrinks />}
      {currentPage === 'About' && <About navigateToPage={navigateToPage} />}
      {currentPage === 'Contact' && <Contact />}
      <Footer setPage={setPage}/>
    </>
  );
}


export default App;