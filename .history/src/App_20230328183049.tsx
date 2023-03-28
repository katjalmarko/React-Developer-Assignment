import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/login';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Navbar/>
          <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={<CreatePost />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App
