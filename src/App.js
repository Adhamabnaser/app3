import { Component } from 'react';
import './App.css';
import  Nav  from './Nav/Nav';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  Portif  from './por/Portif';
import  Contact  from './Contact/Contact';
import  About  from './About/About';
import Layout from './LayOut/Layout';
import Main from './Main/Main';



const router = createBrowserRouter(
  [
    { path:"" , element:  <Layout />,children:
      [
        { path:"",element:<Main />},
        { path:"about",element:<About />},
        {path:"portif" , element:  <Portif />},
        {path:"contact" , element:  <Contact />},
        {path:"*" , element:  <div className=' d-flex justify-content-center align-items-center'>
          <h1 className="text">404 Not Found!</h1>
        </div>}
      ] 
    }  
  ])
export class App extends Component
{

  
  render()
  {
    return    <>

          
            
            <RouterProvider router={router}  />

           
            </>
  }
}
