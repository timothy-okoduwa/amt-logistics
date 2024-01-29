import Home from './pages/Home';
import './App.css';
import TopName from './component/TopName';
import NavBarr from './component/NavBarr';
function App() {
  return (
    <div>
      <div className="youuu fixed-top">
        <TopName />
        <NavBarr />
      </div>

      <Home />
    </div>
  );
}

export default App;
