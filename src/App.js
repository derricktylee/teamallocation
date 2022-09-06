import './App.css';
import Content from './Content';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Error from './Error';
import Team from './Team';
import { AppProvider } from './Context';

function App() {
  return (
    <AppProvider>
    <Router>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route exact path = "/" element={<Content/>}/>
        <Route path = "/team" element={<Team/>} />
        <Route path = "*" element={<Error/>}/>
      </Routes>
    </div>
    </Router>
    </AppProvider>
  );
}

export default App;
