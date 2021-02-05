import './SearchBar.css';
import { VscBell } from "react-icons/vsc";

function SearchBar() {
  return (
    <div className="SearchBar">
        <input type="text" className="SearchBox" placeholder="Exemplo: Rua Turiassu no 74"></input>
        <div className="NotifiBell"><VscBell /></div>
    </div>
  );
}

export default SearchBar;