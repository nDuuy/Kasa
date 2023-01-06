import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './pages/Error';
import Housing from './pages/Housing';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* path for appart with id  */}
          <Route path='/Data/:id' element={<Housing />} />
          {/*path per default if the url is not found */}
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
