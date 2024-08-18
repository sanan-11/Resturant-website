import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Pizza from './pizza.jpeg'
import add from './add.jpg'
import remove from './remove.png'

function FullMenu() {
  const[itemCount, setItemCount] = useState(0)
  return (
    <>
    <Navbar/>
    <div className="menu1">
      <div className="heading">
        <h1 className='h1'>ORCA</h1>
        <h3 className='h3'>&mdash; Menu &mdash;</h3>
      </div>
      <div className="food-items">
        <img src={Pizza} alt="" />
        {!itemCount
        ?<img className='add' onClick={()=>setItemCount(prev=> prev+1)} src={add} alt=''/>
        :<div className='food-item-counter'>
          <img className='remove' onClick={()=>setItemCount(prev=>prev-1)} src={remove} alt="" />
          <p>{itemCount}</p>
          <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={add} alt="" />
        </div>
      }
        <div className="details">
          <div className="details sub">
            <h5>Smoky Hamburger</h5>
            <h5 className='price'>$8</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
      <div className="food-items">
        <img src={Pizza} alt="" />
        <div className="details">
          <div className="details sub">
            <h5>Steak</h5>
            <h5 className='price'>$12</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
      
      <div className="food-items">
        <img src={Pizza} alt="" />
        <div className="details">
          <div className="details sub">
            <h5>Pizza</h5>
            <h5 className='price'>$10</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
      <div className="food-items">
        <img src={Pizza} alt="" />
        <div className="details">
          <div className="details sub">
            <h5>Mint Magrita</h5>
            <h5 className='price'>$5</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
      <div className="food-items">
        <img src={Pizza} alt="" />
        <div className="details">
          <div className="details sub">
            <h5>Pasta</h5>
            <h5 className='price'>$10</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
      <div className="food-items">
        <img src={Pizza} alt="" />
        <div className="details">
          <div className="details sub">
            <h5>Pasta</h5>
            <h5 className='price'>$10</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
      <div className="food-items">
        <img src={Pizza} alt="" />
        <div className="details">
          <div className="details sub">
            <h5>Pasta</h5>
            <h5 className='price'>$10</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
      <div className="food-items">
        <img src={Pizza} alt="" />
        <div className="details">
          <div className="details sub">
            <h5>Pasta</h5>
            <h5 className='price'>$10</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
      <div className="food-items">
        <img src={Pizza} alt="" />
        <div className="details">
          <div className="details sub">
            <h5>Pasta</h5>
            <h5 className='price'>$10</h5>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, consequuntur?</p>
          <button className='button1'>
          Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default FullMenu