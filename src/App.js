import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Exprience from './pages/Exprience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects/> } />
          <Route path='/exprience' element={<Exprience />} />
          <Route path='/project/:id' element={<ProjectDisplay/>} />
          <Route path='*' element={<h1>Page Not Exit</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
