import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import UserName from './components/UserName/UserName';
import PreferenceMenu from './components/PreferenceMenu/PreferenceMenu';
import CarouselFood from './components/CarouselFood/CarouselFood';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <UserName />
      <PreferenceMenu />
      <CarouselFood />
    </div>
  );
}

export default App;
