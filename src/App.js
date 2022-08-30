
import './App.css';
import Page1 from './components/Accordions/RoutingAccordion/page1';
import Page2 from './components/Accordions/RoutingAccordion/page2';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='page1' element={<Page1 />} />
        <Route path='page2' element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
