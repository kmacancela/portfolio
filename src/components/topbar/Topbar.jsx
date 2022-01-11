import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar" + (menuOpen ? " active" : "")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">karina.</a>
                    <div className="item">
                        <Person className="icon" />
                        <span>+1 347 570 5804</span>
                    </div>
                    <div className="item">
                        <Mail className="icon" />
                        <span>karymacancela@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
