import React from 'react'
import "./footer.css"
import app1 from "../images/google-play.png";
import app2 from "../images/app-store.png";
import logo from "../images/logo.png"
const Footer = () => {
    return (
        <>
            <footer>
                <div className="row">
                    <div className="content-acti">
                        <a className="logo">
                            <img src={logo} />
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veniam ex quos hic id nobis
                            beatae earum sapiente! Quod ipsa exercitationem officiis non error illum minima iusto et.
                            Dolores, quibusdam?
                            Lnpnorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veniam ex quos hic id nobis
                            beatae earum sapiente! Quod ipsa exercitationem officiis non error illum minima iusto et.
                            Dolores, quibusdam? ..............
                        </p>
                    </div>

                    <div className='container'>
                        <div className="content">
                            <p>NetFlix</p>
                            <ul className="footer-menu">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">My profile</a></li>
                                <li><a href="#">Pricing plans</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>


                        <div className="content">
                            <p>Browse</p>
                            <ul className="footer-menu">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">My profile</a></li>
                                <li><a href="#">Pricing plans</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>


                        <div className="content">
                            <p>Help</p>
                            <ul className="footer-menu">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">My profile</a></li>
                                <li><a href="#">Pricing plans</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>

                        <div className="content">
                            <p>Download app</p>
                            <ul className="footer-menu">
                                <li className='box-f'> <a>  <img src={app1} /></a></li>
                                <li className='box-f'> <a > <img src={app2} /> </a> </li>
                            </ul>
                        </div>
                    </div>



                </div>


            </footer>
            <div className='copyright'>
                <p>hoangpv UET-VNU  </p>
                <p> Copyright 2022 </p>
            </div>
        </>
    )
}

export default Footer