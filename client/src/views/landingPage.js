import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../assets/scr1.JPG';
import Img2 from '../assets/nachoMamas.png';
import Img3 from '../assets/workout.png';

function LandingPage() {
    return (
        <>
            <div className="container p-3">
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="index.html"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="landingPage.js">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.js">Contact</a>
                            </li>
                        </ul>

                    </div>
                </nav>
                <br /><br />
                <hr className="my-2" />
                <h2 className="display-4 pl-3">Project 2: Jabs</h2>
                <div className="row">
                    <div className="col-sm-7">
                        <figure className="figure">
                            <img src={Img1} className="figure-img img-fluid d-block shadow-sm p-3 mb-5 bg-white rounded"
                                alt="Screenshot of Project 2: Jabs" />
                            <figcaption className="figure-caption">A screenshot of Project 2</figcaption>
                        </figure>
                    </div>
                    <div className="col-sm-5 my-auto">
                        This was a group Project that was required many different technologies like Mysql, Handlebars, Plotly, Sequelize and Passportjs. The application is intended to track symptoms of patients how have received the covid 19 vaccination. It tracks result based off of three catagories(Race, Age and Sex) after gather the information the results are graphed using Plotly and displayed to the user. I was a great learning experience and I really learned a lot about how to work with other developers.
        <br /><br />

                        <p>Deployed Application: <a href='https://jab-effects.herokuapp.com'>Jab Effects</a></p>
                        <p>Github Repository: <a href=' https://github.com/krcook1980/Jabs'> hhttps://github.com/krcook1980/Jabs</a></p>


                    </div>
                </div>
                <hr className="my-2" />
                <h2 className="display-4 pl-3 text-right">Project: Nacho Mama's Quiz</h2>
                <div className="row">
                    <div className="col-sm-6 my-auto">
                        This Application is another quiz but with a sense of humor. As a group we used apis and front end technologies to make a fun and enjoyable game that anyone can enjoy.<br /><br />
                        <p>Deployed Application: <a href='https://e-martinez77.github.io/Project-1/'>Nacho Mama's Quiz</a>
                        </p>
                        <p>Github Repository: <a
                            href='https://github.com/E-Martinez77/Project-1'>https://github.com/E-Martinez77/Project-1</a>
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img src={Img2}
                            className="figure-img img-fluid mx-auto d-block shadow-sm p-3 mb-5 bg-white rounded"
                            alt="Screenshot of nacho Mama's Quiz" />
                        <figcaption className="figure-caption text-center">Screenshot of nacho Mama's Quiz</figcaption>
                    </div>
                    <hr className="my-2" />
                    <h2 className="display-4 pl-3">Workout Tracker!</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <figure className="figure">
                                <img src={Img3} className="figure-img img-fluid d-block shadow-sm p-3 mb-5 bg-white rounded"
                                    alt="Screenshot of Workout Tracker" />
                                <figcaption className="figure-caption">A screenshot of the Workout Tracker!</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-6 my-auto">
                            This application tracks your workouts over the course of a week. This makes it easier to stick to a routine and or create a new workout plan.
         <br /><br />
                            <p>Deployed Application: <a href='https://ajb-workouttracker.herokuapp.com/'>Workout Tracker</a>
                            </p>
                            <p>Github Repository: <a
                                href='https://github.com/AndrewBurke87/workoutTracker'>https://github.com/AndrewBurke87/workoutTracker</a>
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <footer>
                    <div className="card text-black fixed-bottom align-items-center">
                        <img className="card-img-top" src="holder.js/100px180/" alt="" />
                        <div className="card-body">
                            <h4 className="card-title text-muted">Drewburke39@gmail.com</h4>
                        </div>

                    </div>
                </footer>
            </div>
        </>
    )
}
export default LandingPage;