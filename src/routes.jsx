import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Search from './Search';

function CustomRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="search/" element={<Search />} />
    </Routes>
  );
}

export default CustomRoutes;
