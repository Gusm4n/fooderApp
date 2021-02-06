import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import UserName from './components/UserName/UserName';
import PreferenceMenu from './components/PreferenceMenu/PreferenceMenu';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <UserName />
      <PreferenceMenu />
    </div>
  );
}

export default App;
