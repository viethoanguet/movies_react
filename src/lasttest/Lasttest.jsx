import React from 'react'
import "./lasttest.css"
import m1 from '../images/m-1.jpg';
import m2 from '../images/m-2.jpg';
import m3 from '../images/m-3.jpg';
import m4 from '../images/m-4.jpg';
import m5 from '../images/m-5.jpg';
import m6 from '../images/m-6.jpg';
import m7 from '../images/m-7.jpeg';
const Lasttest = () => {
    return (
        <section id="latest">
            <h2 className="latest-heading">Latest Movies</h2>
            <ul className="cs-hidden">
                <li className="item-a">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m1} />
                        </div>
                        <div className="latest-b-text">
                            <strong>Kin</strong>
                            <p>Action Movie</p>
                        </div>
                    </div>
                </li>
                <li className="item-b">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m2} />
                        </div>
                        <div className="latest-b-text">
                            <strong>Peninsula</strong>
                            <p>Train to Busan</p>
                        </div>
                    </div>
                </li>
                <li className="item-c">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m3} />
                        </div>
                        <div className="latest-b-text">
                            <strong>Inception</strong>
                            <p>The Dream Is Real</p>
                        </div>
                    </div>
                </li>
                <li className="item-d">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m4} />
                        </div>
                        <div className="latest-b-text">
                            <strong>IronMan3</strong>
                            <p>Hollywood</p>
                        </div>
                    </div>
                </li>
                <li className="item-e">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m5} />
                        </div>
                        <div className="latest-b-text">
                            <strong>Venom</strong>
                            <p>Action Movie</p>
                        </div>
                    </div>
                </li>
                <li className="item-f">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m6} />
                        </div>
                        <div className="latest-b-text">
                            <strong>Aquaman</strong>
                            <p>Action Movie</p>
                        </div>
                    </div>
                </li>
                <li className="item-g">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m7} />
                        </div>
                        <div className="latest-b-text">
                            <strong>Jungle Cruise</strong>
                            <p>Disney Movie</p>
                        </div>
                    </div>
                </li>
                <li className="item-b">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m2} />
                        </div>
                        <div className="latest-b-text">
                            <strong>Peninsula</strong>
                            <p>Train to Busan</p>
                        </div>
                    </div>
                </li>
                <li className="item-b">
                    <div className="latest-box">
                        <div className="latest-b-img">
                            <img src={m2} />
                        </div>
                        <div className="latest-b-text">
                            <strong>Peninsula</strong>
                            <p>Train to Busan</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Lasttest