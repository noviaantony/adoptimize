import React, { useState } from 'react'
// import './index.css'

const data = [
  {
    id: '01',
    name: 'Lovely Cats',
    Contact: '+65 1234 5678',
    Address: '81 Victoria St, Singapore 188065',
    Website: 'https://www.smu.edu.sg/',
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia fugit, necessitatibus libero harum neque voluptatem maxime quod, deserunt et magni aut consectetur est labore incidunt sequi unde, officiis amet autem suscipit. Iure, doloribus veritatis rem laboriosam quaerat minima error illum, enim quibusdam reprehenderit voluptas animi molestiae, quod culpa veniam!'
  }
  // {
  //   id: '02',
  //   name: 'Sara',
  //   Contact: 'sara@Contact.com',
  //   Address: 'HR Executive',
  // },
  // {
  //   id: '03',
  //   name: 'Mike',
  //   Contact: 'mike@Contact.com',
  //   Address: 'Backend Developer',
  // },
]


const EditableTable = () => {

  const [employeeData, setEmployeeData] = useState(data)

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    )

    setEmployeeData(editData)
  }

  return (
    <div className="flex justify-center mx-40 mt-32 font-nunito">
      {/* <h1 className="title">ReactJS Editable Table</h1> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Website</th>
            <th>Description</th>
          </tr>
          <tr>          
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ employeeId, name, Contact, Address, Website, Description }) => (
            <tr key={employeeId}>
              <td>
                <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="Contact"
                  value={Contact}
                  type="text"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Contact"
                />
              </td>
              <td>
                <input
                  name="Address"
                  type="text"
                  value={Address}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Address"
                />
              </td>
              <td>
                <input
                  name="Website"
                  type="text"
                  value={Website}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Address"
                />
              </td>
              <td>
                <input
                  name="Address"
                  type="text"
                  value={Description}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Address"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )
}

export default EditableTable
