import { Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from './components/navbar';
import Home from './components/home';
import Country from './components/country';
function App() {
  return (
    <div>
     <Navigation />
     <Routes>
      <Route exact path="/" Component={Home}/>
      <Route path="/country/:id" Component={Country} />
     </Routes>
    </div>
  )
}

export default App;
