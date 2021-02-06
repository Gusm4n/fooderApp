import { VscHeart } from "react-icons/vsc";
import { VscTag } from "react-icons/vsc";
import { IoIosTrendingUp } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import './PreferenceMenu.css';


function PreferenceMenu() {
  return (
    <div className="PreferenceMenu">
        <ul>
            <li className="WhiteCard"><VscHeart /></li>
            <li className="WhiteCard"><VscTag /></li>
            <li className="WhiteCard"><IoIosTrendingUp /></li>
            <li className="WhiteCard"><BsThreeDots /></li>
        </ul>
        <div className="CardNames">
            <p>Favorite</p>
            <p>Cheap</p>
            <p>Trend</p>
            <p>More</p>
        </div>
    </div>
  );
}

export default PreferenceMenu;