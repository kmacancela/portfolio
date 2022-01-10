import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Software Developer', 'Frontend Lead', 'Web Designer']
        });
    }, []);
     
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="image">
                    <img src="assets/me.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Karina Macancela</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
