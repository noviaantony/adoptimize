import { useState } from 'react';
import {
  Space,
  Typography,
  Collapse
} from "antd";
import { Dialog, Transition } from '@headlessui/react';

function Settings() {
  const [name, setName] = useState("Wulf's Cat Shelter ");
  const [email, setEmail] = useState("wulfcatsheltersg@gmail.com");
  const [role, setRole] = useState("Admin");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Role:", role);
    console.log("Password:", password);
  };


  

  return (
    <Space direction="vertical table">
       <Typography.Title
        // level={4}
        className="font-nunito font-bold font-6x mt-5"
      >
        Settings
      </Typography.Title>

       <form onSubmit={handleFormSubmit} className="font-nunito">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <div className="flex items-center">
                <span className="mr-2">{name}</span>
                <button
                  type="button"
                  className="text-blue-500"
                  onClick={() => {
                    document
                      .getElementById("name-input")
                      .classList.remove("hidden");
                  }}
                >
                  Edit
                </button>
              </div>
              <input
                type="text"
                id="name-input"
                className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3 mt-2 hidden"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <div className="flex items-center">
                <span className="mr-2">{email}</span>
                <button
                  type="button"
                  className="text-blue-500"
                  onClick={() => {
                    document
                      .getElementById("email-input")
                      .classList.remove("hidden");
                  }}
                >
                  Edit
                </button>
              </div>
              <input
                type="email"
                id="email-input"
                className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3 mt-2 hidden"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-gray-700 font-bold mb-2"
              >
                Role
              </label>
              <div className="flex items-center">
                <span className="mr-2">{role}</span>
                <button
                  type="button"
                  className="text-blue-500"
                  onClick={() => {
                    document
                      .getElementById("role-input")
                      .classList.remove("hidden");
                  }}
                >
                  Edit
                </button>
              </div>
              <select
                id="role-input"
                className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3 mt-2 hidden"
                value={role}
                onChange={handleRoleChange}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-lg border-gray-400 border-solid border py-2 px-3 mt-2"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700"
          >
            Save
          </button>
        </form> 
    </Space>
  );
}

export default Settings;
