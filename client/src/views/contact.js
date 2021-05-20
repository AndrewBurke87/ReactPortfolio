import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <>
            <div id="contact" class="container text-center p-3">
                <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    <a class="navbar-brand" href="/"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br /><br />

                <img src="https://scontent-fml2-1.xx.fbcdn.net/v/t31.18172-8/18738576_10207455263854442_7983436268329434630_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_wOOVPUytVwAX9MPZlO&_nc_ht=scontent-fml2-1.xx&oh=a268dce3ada626c18285924c9e91ef84&oe=60AF97B7" class="rounded-pill mx-auto d-block img-fluid p-3"
                    alt="This me now! lol" />
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Contact me</h1>
                        <p class="lead">Andrew Burke</p>
                        <p class="lead">(801)-898-4335</p>
                        <a class="lead" href="https://github.com/AndrewBurke87">GitHub</a>
                        <a class="lead" href="https://www.linkedin.com/in/AndrewBurke87/">LinkedIn</a><br />
                        <a class="lead" href="https://docs.google.com/document/d/1fiSLURd5TCan_9eU0RBUCyWIRPXhq7UMZ7o8YNcemZM/edit?usp=sharing">Resume</a>
                    </div>
                </div>
                <footer>
                    <div class="card text-black fixed-bottom align-items-center">
                        <div class="card-body">
                            <h4 class="card-title text-muted">Drewburke39@gmail.com</h4>
                        </div>
                    </div>
                </footer>
            </div>




        </>
    )
}

export default Contact;