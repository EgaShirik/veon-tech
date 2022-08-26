import { useState, useEffect } from 'react';
import Header from './components/header';
import { Routes, Route, useLocation } from 'react-router-dom';

import Main from './components/main';
import RequestCallback from './components/contacts/request-callback';
import Footer from './components/footer';
import PortfolioPage from './components/portfolio-page';

const App = ({ store }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const location = useLocation();

  let resizeWindow = () => {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <>
      <Header location={location} />
      <Routes>
        <Route path='/' element={<Main portfolio={store.portfolio} />} />
        <Route path='/portfolio' element={<PortfolioPage portfolio={store.portfolio} />} />
        <Route path='/request-callback' element={<RequestCallback />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
