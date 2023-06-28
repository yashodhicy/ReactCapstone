import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navbar';
import Home from './components/home';
import Eventdetails from './components/event';

function App() {
  return (
    <div id="main">
      <Navigation />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/event/:id" Component={Eventdetails} />
      </Routes>
    </div>
  );
}

export default App;
