import { Component } from "react";
import { Link } from 'react-router-dom';
import'../Nav/nav.css';




export default class Nav extends Component
{

    render()
    {
        return  <>
        
        <nav className=" navbar navbar-expand-lg py-4 color-c">
            <div className="container">
            <Link className="navbar-brand text-white fw-bolder fs-3" to="">START FRAMEWORK</Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item active rounded-3">
                        <Link className="nav-link text-white" to="about">ABOUT <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" to="portif">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" to="contact">CONATCT</Link>
                        </li>

                    </ul>
                
                </div>
                                
            </div>
        </nav>

                </>
    }

}