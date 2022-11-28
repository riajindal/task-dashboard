import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './components/Body Section/Projects/projects';
// import Main from './components/Tasks/main';

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <Projects />
    </div>
  );
}

export default App;
