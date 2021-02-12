import './SearchBar.css';
import { VscBell } from "react-icons/vsc";

function SearchBar() {
  return (
    <div className="SearchBar">
        <input type="text" className="SearchBox" placeholder="Ex.: Rua Turiassu no 74"></input>
        <div className="NotifiBell">
          <div className="BellPosition"><VscBell /></div>
          </div>
    </div>
  );
}

export default SearchBar;