import React from 'react';
import Click from './click.png';
import Chicken from './roast.png';
import Truck from './truck.png';

function Work() {
  return (
    <>
    <div className="Work">
        <div className="container text-center">
            <span className="main-span">Work</span>
            <h2 className='main-h2'>How Its Work</h2>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6"><p className='main-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Reprehenderit <br/> aperiam quam quis ex eius unde! Exercitationem tenetur voluptatum neque
             quaerat</p>
             </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row gx-0 align-items-center  work-main px-md-5 mx-md-3">
                <div className="col-md-4">
                    <div className="work-col1">
                        <img src={Chicken} alt="" />
                        <h5>
                            Pick Meals
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iusto doloremque maiores consectetur voluptate explicabo eius aliquid placeat quisquam esse?
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-col1">
                        <img src={Truck} alt="" />
                        <h5>
                            Choose How Often
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iusto doloremque maiores consectetur voluptate explicabo eius aliquid placeat quisquam esse?
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-col1">
                        <img src={Click} alt="" />
                        <h5>
                            Fast Deliveries
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, iusto doloremque maiores consectetur voluptate explicabo eius aliquid placeat quisquam esse?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Work;