import React, {Component } from "react";
export default class Contact extends Component
{
    render()
    {
        return<>
        
        <div className="container">
        <h1 className=' pt-3 text-center position-relative'>CONATCT SECTION<br/> <i class="fa-solid fa-star text-center px-4"></i></h1>

            <div className="container">
            <div className=" d-flex flex-column justify-content-center">
            <input className=" mt-5 border border-top-0 border-start-0 border-end-0 w-50  m-auto" type="text" placeholder="User Name" />
            <input className=" mt-5 border border-top-0 border-start-0 border-end-0 w-50  m-auto" type="text" placeholder="User E-mail" />
            <input className=" mt-5 border border-top-0 border-start-0 border-end-0 w-50  m-auto" type="text" placeholder="user Age" />
            <input className=" mt-5 border border-top-0 border-start-0 border-end-0 w-50  m-auto" type="text" placeholder="User Password" />
            <button className="btn btn-success mt-3 w-25 m-auto">Send massage</button>
            </div>
            </div>
        
        </div>
       

        </>
    }
}