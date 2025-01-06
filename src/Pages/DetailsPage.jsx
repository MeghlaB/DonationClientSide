import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AddProvider/AuthProvider';
import { BsCalendar2Date } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Swal from 'sweetalert2';
import ScrollToTopOnMount from '../Components/ScrollComponent';
import { ThemeContext } from '../AddProvider/ThemeProvider';

export default function DetailsPage() {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const detailsData = useLoaderData();
  const { thumbnail, title, type, description, minDonation, deadline, email, photo, name } = detailsData;

  const isDeadlineOver = new Date(deadline) <= new Date();
  const handleDonate = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (isDeadlineOver) {
      Swal.fire({
        title: 'Expired!',
        text: 'This campaign has expired. You cannot donate!',
        icon: 'error',
        confirmButtonText: 'Close',
      });
      return;
    }

    const donateData = {
      email: user?.email,
      username: user?.displayName,
      title,
      description,
      minDonation,
      thumbnail,
    };

    fetch('https://server-site-topaz.vercel.app/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(donateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Donate successfully!',
            icon: 'success',
            confirmButtonText: 'Done',
          });
        }
      });
  };

  return (
    <div className="flex flex-col bg-base-100 shadow-xl p-6 my-24 mx-auto max-w-4xl space-y-6">
      <div className="w-full">
        <img className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-lg object-cover" src={thumbnail} alt="Campaign" />
      </div>
      <div>
        <h2 className="text-xl lg:text-3xl font-bold mb-4">{title}</h2>
        <p className={theme === "dark" ? 'text-white/75' : 'text-slate-900'}>{description}</p>
        <p>
          Type: <span className="badge bg-primary py-2 text-slate-700">{type}</span>
        </p>
        <p className="flex items-center gap-2 my-2 ">
          <BsCalendar2Date /> {deadline}
        </p>
        <p className="flex items-center gap-2 text-xl">
          <MdOutlineAttachMoney className="text-2xl font-bold" />
          {minDonation} BDT
        </p>
      </div>
      <div className="border-2 border-primary px-4 py-2 w-full sm:w-96 rounded-lg">
        <h1 className='text-xl font-bold'>Campaign By :</h1>
        <div className="flex items-center gap-3">
          <img
            src={photo}
            alt="user"
            className="rounded-full mt-3 w-16 h-16 border-4 border-secondary cursor-pointer"
          />
          <div>
            <p className="text-xs lg:text-xl font-bold text-secondary">{name}</p>
            <p className="text-xs lg:text-xl font-bold text-secondary">{email}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleDonate}
          className="btn bg-purple-600 text-white hover:bg-[#5c4b77]"
        >
          Donate NOW
        </button>
      </div>
    </div>
  );
}
