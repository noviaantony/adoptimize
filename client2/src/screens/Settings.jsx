import React, { useState } from 'react';
// import { SaveIcon } from '@heroicons/react/solid';

// import { XIcon } from '@heroicons/react/outline';

const Settings = () => {
  const [name, setName] = useState("Adoption Shelter");
  const [email, setEmail] = useState("contact@adopt.com");
  const [phone, setPhone] = useState("(555) 555-5555");
  const [address, setAddress] = useState("123 Main St, Anytown, USA");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // Save settings to backend
    setEditing(false);
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4 space-y-4 bg-white rounded shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Settings</h2>
        {editing ? (
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setEditing(false)}
          >
            <XIcon className="h-6 w-6" />
          </button>
        ) : (
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
      <form>
        <div className="mb-4">
          <label className="block font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          {editing ? (
            <input
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <p className="mt-1">{name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          {editing ? (
            <input
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <p className="mt-1">{email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700" htmlFor="phone">
            Phone
          </label>
          {editing ? (
            <input
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            <p className="mt-1">{phone}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block font-medium text-gray-700       "
            htmlFor="address"
          >
            Address
          </label>
          {editing ? (
            <textarea
              className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <p className="mt-1">{address}</p>
          )}
        </div>
        {editing && (
          <div className="flex justify-end">
            <button
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleSave}
            >
              <SaveIcon className="h-5 w-5 mr-2" />
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Settings;
