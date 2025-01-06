import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function CompaignCard({campaign,onClick}) {
  const navigatate = useNavigate()
  const [comapign , setComapaign ] = useState(campaign)
    const {thumbnail,
        title,
        type,
        description,
        minDonation,
        deadline,
        _id
      }  = comapign
const handleDelete = _id =>{
  Swal.fire({
    title: "Are you sure?",
    text: "Campaign card is Deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
   }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://server-site-topaz.vercel.app/addCompaign/${_id}`,{
           method:"DELETE"
          })
          .then((res)=>res.json())
          .then(data=>{
          if(data.deletedCount >0){
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
          });
          onClick(_id)
          }
            })
          }
        });
}
  return (
    <div>
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={thumbnail}
            alt="Comapign" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {title.split(" ").slice(0, 2).join(" ")}
            <div className="badge badge-secondary">{type}</div>
          </h2>
          <p className='text-left  text-slate-900'>{description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{deadline}</div>
            <div className="badge badge-outline">{minDonation}</div>
          </div>
          <div className='flex gap-5 justify-end pt-5'>
            <Link to={`/update/${_id}`}  className='btn  btn-secondary'>Update</Link>
            <Link onClick={()=> handleDelete(_id)} className='btn btn-error'>Delete</Link>
          </div>
        </div>
        </div>
    </div>
    
  )
}
