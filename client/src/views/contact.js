import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
            <div id="contact" className="container text-center p-3">
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to="/"></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br /><br />

                <img src="https://media-exp1.licdn.com/dms/image/C5603AQE9Ieomam-dWA/profile-displayphoto-shrink_400_400/0/1621296578980?e=1627516800&v=beta&t=R7cwW3AhwttBzssMfwdS1T_5aFdn3BwpBmaoXykvI54" className="rounded-pill mx-auto d-block img-fluid p-3"
                    alt="This me now! lol" />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">About me</h1>
                        <p className="lead">Full Stack Web Developer with a background in Sales and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among my teams for leadership and attention to detail no matter the complexity of the project.  </p>
                        <h1 className="display-4">Contact me</h1>
                        <p className="lead">Andrew Burke</p>
                        <p className="lead">(801)-898-4335</p>

                        {/* <Link className="lead" to="https://github.com/AndrewBurke87">GitHub</Link><br /> */}
                        {/* <Link className="lead" to="https://www.linkedin.com/in/andrewburke87">LinkedIn</Link><br /> */}
                        {/* <Link className="lead" to="file:///Users/andrewburke/Downloads/Hillard%20Creatives%20Inc.%20March%202012%20-%20June%202015.pdf">Resume</Link> */}
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <a href="https://github.com/AndrewBurke87" target="blank">Github</a>
                            </div>
                            <div className="col-md-3">
                                <a href="https://www.linkedin.com/in/andrewburke87" target="blank">LinkedIn</a>
                            </div>
                            <div className="col-md-3">
                                {/* Email */}
                                <a href="mailto:andrewburkedev@gmail.com" target="blank">Email</a>
                            </div>
                            <div className="col-md-3">

                                <a href="https://www.canva.com/design/DAEegba-hJI/Z7PblD1w_ajIlt3h27X-Tw/view?utm_content=DAEegba-hJI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">Resume</a>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>




        </>
    )
}

export default Contact;