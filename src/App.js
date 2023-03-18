
// import './App.css';
import {ProductHome} from './container'
import { Navbar } from './components';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <ProductHome/>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductHome />} />
        <Route path="/cart" element={<div>"Cart"</div>} />
        <Route path="*" element={<div>"Not found"</div>} />
      </Routes>
    </Router>
  );
};

export default App;
