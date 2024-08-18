import React from 'react';
import Pic from '../Footer/logo-06.png';

function Footer() {
  return (
    <> 
    <div className="Footer">
        <div className="container py-5">
            <div className="row gx-0 align-items-baseline">
                <div className="col-md-4 Footer_col1">
                    <img src={Pic} alt="" className='img-fluid1' />
                    <div className="Footer_icons py-3">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="col-md-8 Footer_col2">
                    <div className="row">
                        <div className="col-md-3 py-3 py-md-3">
                            <h5 className='pb-3'>Home</h5>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='/'>Home</a>
                                </li>
                                <li>
                                    <a href='/'>Menu</a>
                                </li>
                                <li>
                                    <a href='/'>About Us</a>
                                </li>
                                <li>
                                    <a href='/'>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 py-3 py-md-3">
                            <h5 className='pb-3 md-3 a '>AboutUs</h5>
                            
                            <p className='b'>+447925183161</p>
                            <p className='b'>orcaclantech.com</p>
                            <p className='b'>info@orcaclantech.com</p>
                            <p className='b'>IT Park Office # 05, Abbottabad KPK </p>
                        </div>
                        <div className="col-md-3 py-3 py-md-3">
                            <h5 className='pb-3 us'>ContactUs</h5>
                            <p className='p'>Terms & Conditions</p>
                            <p className='p'>Privacy Policy</p>
                        </div>
                        {/* <div className="col-md-3">
                            <h4>Home</h4>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;