import React from 'react'

const Carousel = () => {
  return (
  <div className="grid justify-items-center mt-8">
    <div className="carousel w-3/6 mb-8 font-nunito">
      <div id="item1" className="carousel-item w-full flex flex-col">
        <img src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full" />
        <p className = "mt-8 text-xl font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit laborum ab dolorum neque quod labore asperiores, modi ea temporibus aperiam?</p>
      </div> 
      <div id="item2" className="carousel-item w-full">
        <img src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full" />
      </div> 
      <div id="item3" className="carousel-item w-full">
        <img src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full" />
      </div> 
      <div id="item4" className="carousel-item w-full">
        <img src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full" />
      </div>
    </div> 
 
    <div className="flex justify-center w-full py-2 gap-2">
      <a href="#item1" className="btn btn-xs">1</a> 
      <a href="#item2" className="btn btn-xs">2</a> 
      <a href="#item3" className="btn btn-xs">3</a> 
      <a href="#item4" className="btn btn-xs">4</a>
    </div>
  </div>
  )
}

export default Carousel
