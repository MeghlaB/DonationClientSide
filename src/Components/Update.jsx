import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../AddProvider/AuthProvider';
import Swal from 'sweetalert2';
export default function Update() {
    const updateData = useLoaderData()
    const { user } = useContext(AuthContext);
    const {
        thumbnail,
        title,
        type,
        description,
        minDonation,
        deadline,
        _id
      }  = updateData
  const [formData, setFormData] = useState({
    thumbnail: thumbnail || "",
    title: title || "",
    type: type || "personal issue",
    description: description || "",
    minDonation: minDonation || "",
    deadline: deadline || "",
    addedby:user?.email
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
   const from = e.target
   const thumbnail = from.thumbnail.value;
   const title = from.title.value;
   const type = from.type.value;
   const description = from.description.value;
   const minDonation = from.minDonation.value;
   const deadline = from.deadline.value;
   const updateComapign ={thumbnail,title,type,description,minDonation,deadline,addedby:user?.email}
   
  //  send data with server site
  fetch(`https://server-site-topaz.vercel.app/addCompaign/${_id}`,{
    method:'PUT',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(updateComapign)
  })
  .then((res)=> res.json())
  .then((data)=>{
    if(data.modifiedCount){
      Swal.fire({
        title: 'Success!',
        text: 'Updated Comapign SuccesFully!',
        icon: 'success',
        confirmButtonText: 'Done'
      })
      setFormData({
        thumbnail: "",
        title: "",
        type: "personal issue",
        description: "",
        minDonation: "",
        deadline: "",
       
      });
    }
 
  })
  };
  return (
    <div className="container mx-auto py-10 px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Updated Campaign</h2>
    <form
      onSubmit={handleUpdateSubmit}
      className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md"
    >
      <div className="mb-4">
        <label className=" text-left flex justify-start text-gray-700 font-bold mb-2 ">Image URL</label>
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
        <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Campaign Title</label>
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
        <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Campaign Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="personal issue">Personal Issue</option>
          <option value="startup">Startup</option>
          <option value="business">Business</option>
          <option value="creative ideas">Creative Ideas</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Description</label>
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
        <label className=" text-left flex justify-start text-gray-700 font-bold mb-2">Minimum Donation Amount</label>
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
        <label className="text-left flex justify-start text-gray-700 font-bold mb-2">Deadline</label>
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
        <label className="text-left flex justify-start text-gray-700 font-bold mb-2">User Email</label>
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="w-full px-3 py-2 border rounded bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="text-left flex justify-start text-gray-700 font-bold mb-2">User Name</label>
        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="w-full px-3 py-2 border rounded bg-gray-100"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-secondary w-full text-white px-6 py-2 rounded hover:bg-primary"
        >
         Update Campaign
        </button>
      </div>
    </form>
  </div>
  )
}