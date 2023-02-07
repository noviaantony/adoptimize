import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',

  
};

const Slider = () => {

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <div style={contentStyle} style = {{ backgroundImage: "url(" + "https://w0.peakpx.com/wallpaper/324/915/HD-wallpaper-kitten-cute-ragdoll-cat-pisici-white-blue.jpg" + ")",   backgroundSize: 'cover', height: '200px'}} >
        </div>
      </div>
      <div>
        <div style={contentStyle} style = {{ backgroundImage: "url(" + "https://w0.peakpx.com/wallpaper/743/980/HD-wallpaper-ragdoll-cat-kitten-fluffy-cat-cute-ragdoll-pets-cute-animals-cats-ragdoll.jpg" + ")",   backgroundSize: 'cover', height: '200px'}} ></div>
      </div>
      <div>
        <div style={contentStyle} style = {{ backgroundImage: "url(" + "https://w0.peakpx.com/wallpaper/324/915/HD-wallpaper-kitten-cute-ragdoll-cat-pisici-white-blue.jpg" + ")",   backgroundSize: 'cover', height: '200px'}} ></div>
      </div>
      <div>
        <div style={contentStyle} style = {{ backgroundImage: "url(" + "https://w0.peakpx.com/wallpaper/324/915/HD-wallpaper-kitten-cute-ragdoll-cat-pisici-white-blue.jpg" + ")",   backgroundSize: 'cover', height: '200px'}} ></div>
      </div>
    </Carousel>
  );
}

export default Slider;
