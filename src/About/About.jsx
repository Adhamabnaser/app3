import React, {Component } from "react";
export default class About extends Component
{
    render()
    {
        return<>
        
        <div className='bg h-7 text-white position-relative'>
         <div className='container'>
        <h1 className='text-center position-relative'>ABOUT COMPONENT <br/> <i class="fa-solid fa-star text-center px-4 z"></i></h1>
       
        <div className=' d-flex justify-content-around gap-5 pt-5'>
            <div className='w-50'>
                <p>
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className='w-50'>
                <p>
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
      </div>
     </div>
       
        </>
    }
}