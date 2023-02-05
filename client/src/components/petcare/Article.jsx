import React from 'react'

const Article = () => {
  return (
    <>

        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">   
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Everything to buy before you get a cat!</h1>
              </header>
              <figure><img src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="rounded-xl" />
              </figure>
              <i className="mb-6">Image from Unsplashed</i>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, unde, laborum quae molestiae perspiciatis laboriosam maiores debitis aliquid dolore repellat laudantium officia aperiam atque! Esse, laborum aliquam? Aperiam rerum culpa corporis facilis provident molestias sint voluptatem maiores accusantium eius esse odit a, suscipit voluptate repudiandae repellendus in cum. Dolore, consequatur voluptatem. Nulla tempore dicta deserunt quaerat ex, possimus amet neque doloribus officiis mollitia sint perferendis ipsam accusantium fugiat nisi ab omnis dolor magnam autem quia sit. Error ipsa cupiditate maiores saepe deserunt, doloribus debitis, sequi voluptatum maxime voluptate exercitationem? Repellendus quos totam, ad dolorem iste tenetur eos! Soluta et cumque fuga molestiae, odio excepturi expedita libero ratione quisquam ut possimus hic delectus, quibusdam quos. In esse inventore maiores deserunt ducimus nesciunt accusantium eveniet totam, quam sint doloribus? Eos labore dolore facere quod nam, laborum alias aliquid dolores nostrum libero, ipsum illum aliquam odio quidem possimus non dicta, itaque consequuntur. Hic, error dolorem quaerat ea eaque neque perspiciatis, commodi veniam non reiciendis repudiandae consequuntur voluptates placeat, repellat tenetur qui numquam! Accusamus inventore, velit, neque ex consectetur itaque eligendi illum soluta dolorum perferendis a in? Impedit eligendi aliquid fugiat tempora ea sint praesentium dolore deleniti, qui amet similique molestiae velit, eos saepe.
              </p>

              
              {/* <ol>
                <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                  follow your intended user journey and buy something from the site you’ve designed? By running a
                  usability test, you’ll be able to see how users will interact with your design once it’s live;
                </li>
                <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                  properly? Pass your prototype to your data protection team and they can test it for real;</li>
                <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                  providing your client with a hands-on experience;</li>
                <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                  design elements, designers and developers can understand each other — and the project — better.
                </li>
              </ol> */}
              
            </article>
          </div>
        </main>
       

       

      
    </>
  )
}

export default Article


// new letter

        // <section className="bg-white dark:bg-gray-900">
        //   <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        //     <div className="mx-auto max-w-screen-md sm:text-center">
        //       <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
        //       <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
        //       <form action="#">
        //         <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
        //           <div className="relative w-full">
        //             <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        //             <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        //               <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
        //             </div>
        //             <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
        //           </div>
        //           <div>
        //             <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
        //           </div>
        //         </div>
        //         <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
        //       </form>
        //     </div>
        //   </div>
        // </section>