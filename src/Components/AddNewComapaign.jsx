
import React, { useContext, useState } from "react";
import { AuthContext } from "../AddProvider/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { ThemeContext } from "../AddProvider/ThemeProvider";

export default function AddCampaign() {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    thumbnail: "",
    title: "",
    type: "personal issue",
    description: "",
    minDonation: "",
    deadline: "",
    email: user?.email,
    name: user?.displayName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const from = e.target;
    const thumbnail = from.thumbnail.value;
    const title = from.title.value;
    const type = from.type.value;
    const description = from.description.value;
    const minDonation = from.minDonation.value;
    const deadline = from.deadline.value;

    const addInfo = {
      thumbnail,
      title,
      type,
      description,
      minDonation,
      deadline,
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
    };

    fetch(`https://server-site-topaz.vercel.app/addCompaign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Campaign added successfully!',
            icon: 'success',
            confirmButtonText: 'Done',
          });
          setFormData({
            thumbnail: "",
            title: "",
            type: "personal issue",
            description: "",
            minDonation: "",
            deadline: "",
           
          });
        }
      });
  };

  return (
    <div className={`container mx-auto  py-24 px-4 ${theme === 'dark' ? ' text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="md:text-xl lg:text-3xl font-bold text-center mb-8">
        <Typewriter
          words={['Add New Campaign']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={100}
          className="text-red-500"
        />
      </h2>
      <form
        onSubmit={handleSubmit}
        className={`max-w-2xl mx-auto p-6 rounded shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-base-200'}`}
      >
        <div className="mb-4">
          <label className={`text-left flex justify-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-bold mb-2`}>Image URL</label>
          <input
            type="url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className={`text-left flex justify-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-bold mb-2`}>Campaign Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter campaign title"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className={`text-left flex justify-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-bold mb-2`}>Campaign Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="Personal issue">Personal Issue</option>
            <option value="Startup">Startup</option>
            <option value="Business">Business</option>
            <option value="Creative ideas">Creative Ideas</option>
          </select>
        </div>
        <div className="mb-4">
          <label className={`text-left flex justify-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-bold mb-2`}>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter campaign description"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className={`text-left flex justify-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-bold mb-2`}>Minimum Donation Amount</label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            placeholder="Enter minimum donation amount"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className={`text-left flex justify-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-bold mb-2`}>Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className={`text-left flex justify-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-bold mb-2`}>User Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className={`w-full px-3 py-2 border rounded ${theme=== "dark"?'bg-gray-900':'bg-gray-100'} `}
          />
        </div>

        <div className="mb-4">
          <label className={`text-left flex justify-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-bold mb-2`}>User Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className={`w-full px-3 py-2 border rounded ${theme=== "dark"?'bg-gray-900':'bg-gray-100'} `}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn bg-purple-700 w-full text-white px-6 py-2 rounded hover:bg-[#796B96]"
          >
            Add Campaign
          </button>
        </div>
      </form>
    </div>
  );
}
