import React from 'react';
import Pic from '../Home/img7.png';
import { Link } from 'react-router-dom';
function About() {
  return (
    <>
   
    <div className="About">
    <div className="container-fluid  ">
        <div className="row gx-0 ">
            <div className="col-md-6 order-2 order-md-1">
                <div className="About_col1 pt-md-0 pt-4">
                    <img src={Pic} alt="" className='img-fluid'  />
                </div>
            </div>
            <div className="col-md-6 order-2 order-md-2">
                <div className="About_col2">
                    <span className='main-span'>About</span>
                    <h2 className='main-h2'>Food Is An Important Part</h2>
                    <h2 className='main-h2'>Of A Balance Diet</h2>
                    <p className='main-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor officia quasi deleniti, omnis error ab laboriosam aspernatur libero eius.</p>
                    <p className='main-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor officia quasi deleniti, omnis error ab laboriosam aspernatur libero eius.</p>
                    <div className="about_col2_btns pt-4">
                        <button className='btn2' mx-4 type='button'>Learn More</button>
                       <button className='btn2 mx-4' type='button'>
                        <i className="fa fa-play-circle mx-1" aria-hidden="true"></i>
                        Watch Now
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About;