
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AddProvider/AuthProvider';

export default function MyDonation() {
  const { user } = useContext(AuthContext);
  // const donationUser = useLoaderData();
  const [userCampaigns, setUserCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserCampaigns = async () => {
      if (user?.email) {
        const response = await fetch(`https://server-site-topaz.vercel.app/user/${user?.email}`);
        const data = await response.json();
        // console.log(data);
        setUserCampaigns(data)
        
      }
 
      setLoading(false);
    };

    fetchUserCampaigns();
  }, [user]);

  return (
    <div className="py-28">
  {loading ? (
    <div className="flex justify-center items-center h-40">
      <div className="spinner border-4 border-violet-500 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
    </div>
  ) : userCampaigns.length === 0 ? (
    <p className="text-center text-2xl font-bold text-violet-700 bg-base-200 h-80 flex items-center justify-center">
      No donations found!
    </p>
  ) : (
    <div className="flex flex-col gap-6 my-4 container mx-auto">
      {userCampaigns.map((donation) => (
        <div
          key={donation._id}
          className="card bg-base-100 shadow-xl p-4 px-2 md:px-4 lg:px-5 border flex flex-col lg:flex-row items-center gap-4"
        >
          <figure className="w-40 flex-shrink-0">
            <img
              src={donation.thumbnail || 'default-thumbnail.png'}
              alt={donation.title}
              className="h-40 w-full object-cover"
            />
          </figure>
          <div className="card-body flex-grow">
            <h2 className="card-title">{donation.title}</h2>
            <p>{donation.description}</p>
            <p className="font-bold text-xs lg:text-[18px]">
              Minimum Donation: {donation.minDonation} BDT
            </p>
            <p>Donated By: {donation.username}</p>
            <p>Email: {donation.email}</p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
}
