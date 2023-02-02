import React, { useState } from 'react'

const data = [
  {
    id: '01',
    Name: 'Lovely Cats',
    Contact: '+65 1234 5678',
    Address: '81 Victoria St, Singapore 188065',
    Website: 'https://www.smu.edu.sg/',
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia fugit, necessitatibus libero harum neque voluptatem maxime quod, deserunt et magni aut consectetur est labore incidunt sequi unde, officiis amet autem suscipit. Iure, doloribus veritatis rem laboriosam quaerat minima error illum, enim quibusdam reprehenderit voluptas animi molestiae, quod culpa veniam!',
    AdoptionProcess: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi culpa eius odit earum harum beatae, quasi aliquid blanditiis labore ea maiores voluptatem. Cum iusto obcaecati odit voluptatibus, deserunt sint sunt ea dolores blanditiis nam deleniti quo perspiciatis expedita est incidunt doloribus cupiditate, quia consequuntur praesentium eligendi temporibus excepturi vitae. Ducimus, doloremque veritatis. Dicta aliquam nostrum at quas consequuntur neque enim dolore sunt, velit doloremque illum possimus eligendi porro quod, adipisci doloribus nesciunt amet tempora quis natus a esse. Consequuntur unde quisquam dolorem atque, neque delectus sit facere beatae animi. Dignissimos suscipit temporibus expedita, ipsa culpa quod doloribus magnam fugit consequuntu'
  }
];

const EditableTable2 = () => {

  const [shelterData, setShelterData] = useState(data)

  const onChangeInput = (e, id) => {
    const { Name, value } = e.target

    const editData = shelterData.map((item) =>
      item.id === id && Name ? { ...item, [Name]: value } : item
    )

    setShelterData(editData)
  }

  return (
    <div className="mt-20">
      <div className = "grid grid-cols-2 gap-4">
        <div class="mb-6 ml-32 font-nunito">
            <label for="base-input" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white font-bold">Shelter Name:</label>
            {shelterData.map(({ shelterId, Name, Contact, Address, Website, Description,AdoptionProcess }) => ( 
              <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter Your Shleter's Name"
              onChange={(e) => onChangeInput(e, shelterId)}
              value = {Name}
            />
            ))}
            
        </div> 
        <div class="mb-6 mr-32 font-nunito">
            <label for="base-input" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white font-bold">Contact:</label>
            {shelterData.map(({ shelterId, Name, Contact, Address, Website, Description,AdoptionProcess  }) => ( 
              <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" 
              placeholder="Enter Your Shleter's Contact Number"
              onChange={(e) => onChangeInput(e, shelterId)}
              value = {Contact}
              />
            ))}
        </div> 
      </div>

      <div className = "grid grid-cols-2 gap-4">
        <div class="mb-6 ml-32 font-nunito">
          <label for="base-input" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white font-bold">Address:</label>
          {shelterData.map(({ shelterId, Name, Contact, Address, Website, Description,AdoptionProcess  }) => ( 
          <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter Your Shleter's Address" onChange={(e) => onChangeInput(e, shelterId)}
          value = {Address}/>
          ))}
        </div> 
        <div class="mb-6 mr-32 font-nunito">
            <label for="base-input" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white font-bold">Website URL:</label>
            {shelterData.map(({ shelterId, Name, Contact, Address, Website, Description,AdoptionProcess  }) => ( 
            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter Your Shelter's Website URL"onChange={(e) => onChangeInput(e, shelterId)}
            value = {Website}/>
            ))}
        </div>

      </div>
      
         
      <div class="mb-12 mx-32 font-nunito">
          <label for="large-input" class="block mb-2 text-xl text-gray-900 dark:text-white font-bold">About Us:</label>
          {shelterData.map(({ shelterId, Name, Contact, Address, Website, Description,AdoptionProcess  }) => ( 
          <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter Description About Your Shelter" onChange={(e) => onChangeInput(e, shelterId)}
          value = {Description}/>
          ))}
      </div>
      <div class="mb-12 mx-32 font-nunito">
          <label for="large-input" class="block mb-2 text-xl text-gray-900 dark:text-white font-bold">Adoption Process:</label>
          {shelterData.map(({ shelterId, Name, Contact, Address, Website, Description,AdoptionProcess  }) => ( 
          <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-nunito" placeholder="Enter Detailed Description About Adoption Process For Your Shelter" onChange={(e) => onChangeInput(e, shelterId)}
          value = {AdoptionProcess}/>
          ))}
      </div>
    </div>
  )
}

export default EditableTable2
