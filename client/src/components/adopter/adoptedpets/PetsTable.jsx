import React from 'react'

const PetsTable = () => {
    const petsData = [
        {
            name: 'Doge',
            type: 'dog',
            shelterName: 'shelterlol',
            cost: '4000',
            status: 'Adopted',
            image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        },
        {
            name: 'Tom',
            type: 'cat',
            shelterName: 'shelterlol',
            cost: '4000',
            status: 'Pending Approval',
            image: 'https://images.unsplash.com/photo-1511876849877-f8d0d953d2e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
    ]
    return (
        <>
    
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 mx-32 mt-20 mb-60">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Type</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Shelter Name</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Status</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Cost</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
            
            
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
    
          {petsData.map((data) => {
          return (
                                        
                              
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="relative h-10 w-10">
                <img
                  class="h-full w-full rounded-full object-cover object-center"
                  src={data.image}
                  alt=""
                />
                <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div class="text-sm">
                <div class="font-medium text-gray-700">{data.name}</div>
              </div>
            </th>
            <td class="px-6 py-4">{data.type}</td>
            <td class="px-6 py-4">{data.shelterName}</td>
            <td class="px-6 py-4">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                {data.status}
              </span>
            </td>
            <td class="px-6 py-4">{data.cost}</td>
            
          </tr>
               );
          })}
        </tbody>
      </table>
    </div>
        </>
      )
}

export default PetsTable;