
import './App.css';
import Mainpage from './components/mainpage/mainpage.js';
import SearchState from './context/searchstate';
function App() {
  return (
    <SearchState>
    <div className="App">
      <Mainpage />
    </div>
    </SearchState>
  );
}

export default App;
