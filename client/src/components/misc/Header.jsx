import React from 'react'

const Header = ({Title, Description}) => {
  return (
    <section class="bg-[#F6F7FA] dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#050a30] md:text-5xl lg:text-6xl dark:text-white font-nunito">
          {Title}
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 font-nunito">
          {Description}
        </p>
      </div>
    </section>
  );
}

export default Header

// #EAF2F8 