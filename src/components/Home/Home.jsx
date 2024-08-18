import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import Navbar from '../Navbar/Navbar'
import NewsLetter from '../NewsLetter/NewsLetter'
import Testimonial from '../Testimonial/Testimonial'
import Burger from './img6.png'
import Work from '../Work/Work'

function Home() {
  return (
    <>
    <Navbar />
    <div className="Home">
        <div className="container-fluid Home-Main">
            <div className="row gx-0 align-items-start">
                <div className="col-md-6">
                    <div className="home_col1">
                    <h1>Your Favourite Food </h1>
                    <h1>Delivered Hot &</h1>
                    <h1>Fresh</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Itaque qui alias exercitationem repellendus id neque quibusdam quis dolor officiis fuga necessitatibus veritatis! </p>
                    {/* <p></p> */}
                    <button className="btn2">Order Now <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="home_col2">
                <img src={Burger} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="Delivery">
        <div className="container text-center">
            <div className="row gx-0">
                <div className="col-md-4">
                    <div className="Delivery_col">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <h5>
                            Today 10:00- 7:00pm
                        </h5>
                        <p> Working Hours</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Delivery_col">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <h5>
                        Abbottabad
                        </h5>
                        <p>
                            Get Directions
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Delivery_col">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <h5>
                        +20(3)89898989
                    </h5>
                    <p>Call Online</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <About/>
    <Work/>
    <Menu/>
    <Testimonial/>
    <NewsLetter/>
    <Footer/>

    </>
  )
}

export default Home