import React, {Component } from "react";
import '../por/por.css'
export default class Portif extends Component
{
    render()
    {
        return<>
        
        <div>
        <h1 className=' pt-3 text-center position-relative'>PORTFOLIO COMPONENT<br/> <i class="fa-solid fa-star text-center px-4"></i></h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pos ">
                        <img className="rounded-3" src="https://routeegy.github.io/startFramework/assets/images/poert1.png" />
                        <div className="posh">
                        <i class="fa-solid fa-plus d-flex justify-content-center align-content-center fs-1 mt-6 pt-5"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pos ">
                        <img className="rounded-3" src="https://routeegy.github.io/startFramework/assets/images/port2.png" />
                        <div className="posh">
                        <i class="fa-solid fa-plus d-flex justify-content-center align-content-center fs-1 mt-6 pt-5"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pos ">
                        <img className="rounded-3" src="https://routeegy.github.io/startFramework/assets/images/port3.png" />
                        <div className="posh">
                        <i class="fa-solid fa-plus d-flex justify-content-center align-content-center fs-1 mt-6 pt-5"></i>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    }
}