import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../assets/scr1.JPG';
import Img2 from '../assets/workout.png';
import Img3 from '../assets/loveIsBlind.png';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <>
            <div className="container p-3">
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
                <hr className="my-2" />
                <h2 className="display-4 pl-3">Project: Jab Effects</h2>
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

                        <p>Deployed Application: <Link to='https://jab-effects.herokuapp.com'>Jab Effects</Link></p>
                        <p>Github Repository: <Link to=' https://github.com/krcook1980/Jabs'> hhttps://github.com/krcook1980/Jabs</Link></p>


                    </div>
                </div>
                <hr className="my-2" />
                <h2 className="display-4 pl-3 text-right">Project: Workout Tracker</h2>
                <div className="row">
                    <div className="col-sm-6 my-auto">
                        An application that tracks your workouts.<br /><br />
                        <p>Deployed Application: <Link to='https://github.com/AndrewBurke87/workoutTracker'>Workout Tracker</Link>
                        </p>
                        <p>Github Repository:
                            <Link
                                to='https://ajb-workouttracker.herokuapp.com/'>https://ajb-workouttracker.herokuapp.com/</Link>
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img src={Img2}
                            className="figure-img img-fluid mx-auto d-block shadow-sm p-3 mb-5 bg-white rounded"
                            alt="Screenshot of Workout Tracker" />
                        <figcaption className="figure-caption text-center">Screenshot of Workout Tracker</figcaption>
                    </div>
                    <hr className="my-2" />
                    <h2 className="display-4 pl-3">Project: Love is Blind!</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <figure className="figure">
                                <img src={Img3} className="figure-img img-fluid d-block shadow-sm p-3 mb-5 bg-white rounded"
                                    alt="Screenshot of Workout Tracker" />
                                <figcaption className="figure-caption">A screenshot of the Love is Blind!</figcaption>
                            </figure>
                        </div>
                        <div className="col-sm-6 my-auto">
                            This dating/chat app matches users based on common interests and allows them to chat. With no pictures allowed, this dating app is making genuine connections for genuine people.
         <br /><br />
                            <p>Deployed Application: <Link to='https://love-is-blind.herokuapp.com'>Love is Blind</Link>
                            </p>
                            <p>Github Repository: <Link
                                to='https://github.com/krcook1980/DatingApp'>https://github.com/krcook1980/DatingApp</Link>
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