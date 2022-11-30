// import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './components/Body Section/Projects/projects';
import Main from './components/Tasks/main';
import LoginForm from './components/Login Page/LoginForm';
import SignUp from './components/Sign Up Page/sign-up';

function App() {

  return <div>
  <Router>
    <Routes>
      <Route exact path="/" element={<SignUp />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/projects" element={<div className='flex'>
          <Sidebar />
          <Projects />
        </div>} />
      <Route exact path="/tasks" element={
        <div className='flex'>
          <Sidebar />
          <Main />
        </div>
      } />
    </Routes>
  </Router>
  </div> 
}

export default App;
