import Header from "./components/header";
import { Routes, Route, useLocation } from "react-router-dom";

import Main from "./components/main";
import RequestCallback from "./components/contacts/request-callback";
import Footer from "./components/footer";

const App = () => {

  const location = useLocation();

  return (
    <>
      <Header location={location} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/request-callback' element={<RequestCallback />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
