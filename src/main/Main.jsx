import React from 'react'
import "./main.css"
import s1 from '../images/s-1.jpg';
import s2 from '../images/s-2.jpg';
import s3 from '../images/s-3.jpg';
import s4 from '../images/s-4.jpg';
import s5 from '../images/s-5.png';
const Main = () => {
    return (
        <section id="main">
            <h1 className="showcase-heading">Showcase</h1>
            <ul className="cs-hidden">
                <li className="item-a">
                    <div className="showcase-box">
                        <img src={s1} />
                    </div>
                </li>
                <li className="item-b">
                    <div className="showcase-box">
                        <img src={s2} />
                    </div>
                </li>
                <li className="item-c">
                    <div className="showcase-box">
                        <img src={s3} />
                    </div>
                </li>
                <li className="item-d">
                    <div className="showcase-box">
                        <img src={s4} />
                    </div>
                </li>
                <li className="item-e">
                    <div className="showcase-box">
                        <img src={s5} />
                    </div>
                </li>
            </ul>

        </section>
    )
}

export default Main