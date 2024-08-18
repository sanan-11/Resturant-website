import React from 'react';
import Pic from '../Testimonial/1.jpg';

function Testimonial() {
  return (
    <>
    <div className="Testimonial">
        <div className="container py-5 my-md-5">
        <div className='text-center'>
        <span className="main-span text-center">Testimonal</span>
        </div>
            <h2 className='main-h2 text-center'>What They are saying</h2>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p className='main-p text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Reprehenderit <br/> aperiam quam quis ex eius unde! Exercitationem tenetur voluptatum neque
             quaerat</p>
             </div>
                <div className="col-md-3"></div>
            </div>
            {/* ******************* */}
            <div className="row gx-0 text-center py-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="testimonial_col">
                      <img src={Pic} alt="" className='img-fluid'/>
                      <p className='pt-4 pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus perferendis facere dolore quo aliquid dolor facilis saepe asperiores aspernatur.</p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <h5 className='py-3'>Orca Clan Tech</h5>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
             {/* ******************* */}
        </div>
    </div>
    </>
  )
}

export default Testimonial;