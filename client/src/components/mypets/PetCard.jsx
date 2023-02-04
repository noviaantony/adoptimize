import React from 'react'
import Slider from './Slider'
import { Button, Space } from 'antd';

const PetCard = ({Name, Breed, Sex, Age}) => {
  return (
    <>
    <div class="rounded-lg overflow-hidden shadow-lg bg-white w-3/6">
      {/* <img class="w-full" src={'https://w0.peakpx.com/wallpaper/324/915/HD-wallpaper-kitten-cute-ragdoll-cat-pisici-white-blue.jpg'} alt="River"/> */}
      <Slider/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl">Timothee</div>
        {/* <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
      </div>
      <div class="px-6 pt-2 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ragdoll</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Kitten</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Male</span>
      </div>
      <div class="px-6 pt-2 pb-2">
        <Button className="mx-2">Edit</Button>
        <Button danger className="mb-3">
          Delete
        </Button>
      </div>
      

    </div>


    </>
  )
}

export default PetCard
