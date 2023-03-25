import React, { useState } from 'react'
import { Image, Space, Typography } from "antd";

const PaymentForm = () => {

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [donation, setDonation] = useState(0);
  const processingFee = 5.50;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleDonationChange = (e) => {
    setDonation(parseFloat(e.target.value));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Card Number:", cardNumber);
    console.log("Expiry:", expiry);
    console.log("CVV:", cvv);
    console.log("Donation:", donation);
  };

  return (
    <>
      <div className="AppHeader bg-white">
        <div>
          <Image
            width={150}
            src={require("./Adoptimize.png")}
            alt="AdoptimizeLogo"
            className="mt-5"
          ></Image>
          <Image
            width={150}
            src={require("./Shelter.png")}
            alt="Logo"
            className="mt-5"
          ></Image>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="bg-[#F5F5F9] h-full w-full">
          <Space direction="vertical table" className="bg-[#F5F5F9] h-full">
            <Typography.Title
              // level={10}
              className="font-nunito font-bold font-8xl mt-5 ml-10"
            >
              Adoption Fee Payment
            </Typography.Title>
            {/* <div className="flex justify-center items-center h-screen font-nunito"> */}
            <div className="w-6/6 ml-20 max-w-md">
              <form
                onSubmit={handleFormSubmit}
                className=" rounded-lg px-8 py-8 font-nunito"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="card-number"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="expiry"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
                      value={expiry}
                      onChange={handleExpiryChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
                      value={cvv}
                      onChange={handleCvvChange}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="donation"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Donation Amount
                  </label>
                  <div className="flex items-center">
                    <span className="font-bold mr-2">$</span>
                    <input
                      type="number"
                      id="donation"
                      className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
                      value={donation}
                      onChange={handleDonationChange}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">Adoption Fee:</span>
                  <span className="font-bold">$350.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold">Donation:</span>
                  <span className="font-bold">${donation.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-bold">
                    Processing Fee:
                  </span>
                  <span className="font-bold">${processingFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-700 font-bold">
                    Total:
                  </span>
                  <span className="font-bold">
                    ${(processingFee + donation + 350.00).toFixed()}
                  </span>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="border-2 border-[#F7AF7A] text-[#F7AF7A] hover:bg-[#F7AF7A] hover:text-white font-bold py-2 px-4 rounded mr-6 w-28"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#F7AF7A] hover:bg-white hover:text-[#F7AF7A] text-white font-bold py-2 px-4 rounded w-28"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
            {/* </div> */}
          </Space>
        </div>
        <div className="font-nunito flex content-start h-4/6 mt-24 ">
          <div className="w-3/6 bg-orange-100 rounded-2xl shadow-md">
            <Image
              // width={470}
              className="rounded-xl"
              src="https://i.redd.it/k1z06811fux41.png"
            />


            {/*"Bella",
                    "British Shorthair",
                    4,
                    LocalDate.of(2022, 2, 26),
                    LocalDate.of(2019, 1, 26),
                    "up to date on vaccinations, no fleas",
                    "Available",
                    "https://i.redd.it/k1z06811fux41.png",
                    "Hello, my name is Bella, and I am a beautiful British Shorthair with a gentle personality and striking green eyes. I am a relaxed and easy-going cat.",
                    9.0,
                    350.00,
                    "Female"*/}

            <div className="grid grid-cols-2">
              <div className="text-sm">
                <h2 className="m-5">
                  <b>Name: </b> Bella
                </h2>
                <h2 className="m-5">
                  <b>Id: </b> 4
                </h2>
                <h2 className="m-5">
                  <b>Breed: </b> British Shorthair
                </h2>
              </div>
              <div className="text-sm">
                <h2 className="m-5">
                  <b>Weight: </b>4.08kg
                </h2>
                <h2 className="m-5">
                  <b>Medical Details: </b> up to date on vaccinations, no fleas
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;


      // <div className="flex justify-center items-center h-screen bg-gray-100">
      //   <div className="w-full max-w-md">
      //     <form
      //       onSubmit={handleFormSubmit}
      //       className="bg-white shadow-md rounded-lg px-8 py-8"
      //     >
      //       <h1 className="text-2xl font-bold mb-6 text-center">
      //         Pet Adoption Fee Payment
      //       </h1>
      //       <div className="mb-6">
      //         <label
      //           htmlFor="name"
      //           className="block text-gray-700 font-bold mb-2"
      //         >
      //           Name on Card
      //         </label>
      //         <input
      //           type="text"
      //           id="name"
      //           className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
      //           value={name}
      //           onChange={handleNameChange}
      //         />
      //       </div>
      //       <div className="mb-6">
      //         <label
      //           htmlFor="card-number"
      //           className="block text-gray-700 font-bold mb-2"
      //         >
      //           Card Number
      //         </label>
      //         <input
      //           type="text"
      //           id="card-number"
      //           className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
      //           value={cardNumber}
      //           onChange={handleCardNumberChange}
      //         />
      //       </div>
      //       <div className="grid grid-cols-2 gap-6 mb-6">
      //         <div>
      //           <label
      //             htmlFor="expiry"
      //             className="block text-gray-700 font-bold mb-2"
      //           >
      //             Expiry Date
      //           </label>
      //           <input
      //             type="text"
      //             id="expiry"
      //             className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
      //             value={expiry}
      //             onChange={handleExpiryChange}
      //           />
      //         </div>
      //         <div>
      //           <label
      //             htmlFor="cvv"
      //             className="block text-gray-700 font-bold mb-2"
      //           >
      //             CVV
      //           </label>
      //           <input
      //             type="text"
      //             id="cvv"
      //             className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
      //             value={cvv}
      //             onChange={handleCvvChange}
      //           />
      //         </div>
      //       </div>
      //       <div className="mb-6">
      //         <label
      //           htmlFor="donation"
      //           className="block text-gray-700 font-bold mb-2"
      //         >
      //           Donation Amount
      //         </label>
      //         <div className="flex items-center">
      //           <span className="font-bold mr-2">$</span>
      //           <input
      //             type="number"
      //             id="donation"
      //             className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3"
      //             value={donation}
      //             onChange={handleDonationChange}
      //           />
      //         </div>
      //       </div>
      //       <div className="flex justify-between items-center">
      //         <span className="text-gray-700 font-bold">Adoption Fee:</span>
      //         <span className="font-bold">$200</span>
      //       </div>
      //       <div className="flex justify-between items-center mb-6">
      //         <span className="text-gray-700 font-bold">Donation:</span>
      //         <span className="font-bold">${donation.toFixed(2)}</span>
      //       </div>
      //       <div className="flex justify-center">
      //         <button
      //           type="submit"
      //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      //         >
      //           Pay Now
      //         </button>
      //       </div>
      //     </form>
      //   </div>
      // </div>;