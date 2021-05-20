import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                                <Link className="nav-link" to="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br /><br />

                <img src="https://scontent-fml2-1.xx.fbcdn.net/v/t31.18172-8/18738576_10207455263854442_7983436268329434630_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_wOOVPUytVwAX9MPZlO&_nc_ht=scontent-fml2-1.xx&oh=a268dce3ada626c18285924c9e91ef84&oe=60AF97B7" className="rounded-pill mx-auto d-block img-fluid p-3"
                    alt="This me now! lol" />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Contact me</h1>
                        <p className="lead">Andrew Burke</p>
                        <p className="lead">(801)-898-4335</p>
                        <Link className="lead" to="https://github.com/AndrewBurke87">GitHub</Link>
                        <Link className="lead" to="https://www.linkedin.com/in/AndrewBurke87/">LinkedIn</Link><br />
                        <Link className="lead" to="https://docs.google.com/document/d/1fiSLURd5TCan_9eU0RBUCyWIRPXhq7UMZ7o8YNcemZM/edit?usp=sharing">Resume</Link>
                    </div>
                </div>
                <footer>
                    <div className="card text-black fixed-bottom align-items-center">
                        <div className="card-body">
                            <h4 className="card-title text-muted">Drewburke39@gmail.com</h4>
                        </div>
                    </div>
                </footer>
            </div>




        </>
    )
}

export default Contact;