
import { Component } from 'react';
import { Outlet } from "react-router-dom";
import Nav from '../Nav/Nav';
import'../LayOut/layout.css'

export default class Layout extends Component
{
    render()
    {
        return<>
        <Nav/>


      
           <div className='h-7'>
                <div>
                    <Outlet />
                </div>
           </div>
        


        <footer className="text-center m-0 py-5 h-25 position-relative color-c">
            <div className='h-4 text-white d-flex justify-content-around pt-5 '>
                <div className='w-25 pt-3 '>
                    <h2>LOCATION</h2>
                    <h6>2215 John Daniel Drive</h6>
                    <h6>Clark, MO 65243</h6>
                </div>
                <div className='w-25 pt-3'>
                    <h2 className='fs-1'>AROUND THE WEB</h2>
                    <div className='text-white'>
                    <i class="fa-brands fa-facebook p-2 rounded-circle border border-2 m-1"></i>
                    <i class="fa-brands fa-twitter p-2 rounded-circle border border-2 m-1"></i>
                    <i class="fa-brands fa-linkedin-in p-2 rounded-circle border border-2 m-1"></i>
                    <i class="fa-solid fa-globe p-2 rounded-circle border border-2 m-1"></i>
                    </div>
                </div>
                <div className='w-25 pt-3'>
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className='py-3 bg-dark  position-absolute bottom-0 w-100'>
                <p className='text-white pt-1'>Copyright © Your Website 2021</p>
            </div>
        </footer>
        </>
    }
}