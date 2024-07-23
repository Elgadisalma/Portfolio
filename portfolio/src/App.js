import './App.css';
import Sidebar from './components/Sidebar';
import AboutMe from './views/AboutMe';

function App() {
  return (
    <>
    <div className='flex flex-col lg:flex-row gap-3'>
    <Sidebar/>

    <AboutMe/>
    </div>
    </>
  );
}

export default App;
