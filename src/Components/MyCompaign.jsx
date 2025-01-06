


import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AddProvider/AuthProvider";
import Swal from "sweetalert2";
import { ThemeContext } from "../AddProvider/ThemeProvider";
import { CiViewTable } from "react-icons/ci";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

export default function MyCampaign() {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("table");

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`https://server-site-topaz.vercel.app/addCompaign?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCampaigns(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching campaigns:", error);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Campaign card will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-site-topaz.vercel.app/addCompaign/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Campaign has been deleted.", "success");
              const remaining = campaigns.filter((campaign) => campaign._id !== _id);
              setCampaigns(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto py-28">
      <div className="mb-6 text-left">
        <button
          className={`btn ${view === "table" ? "bg-secondary text-white" : "btn-outline"} mx-2`}
          onClick={() => setView("table")}
        >
          <CiViewTable />
        </button>
        <button
          className={`btn ${view === "card" ? "bg-secondary text-white" : "btn-outline"} mx-2`}
          onClick={() => setView("card")}
        >
          <TfiLayoutGrid3Alt />
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-9 h-40">
          <div className="spinner-border border-4 border-violet-500 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
        </div>
      ) : view === "table" ? (
        // tableView
        <div className="overflow-x-auto">
          <table className={`table-auto w-full ${theme === "dark" ? "text-white" : "text-gray-800"} border-separate border-spacing-4`}>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Date</th>
                <th>MinDonation</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>
                  <td>{data.title}</td>
                  <td>{data.deadline}</td>
                  <td>{data.minDonation}</td>
                  <td>
                    <Link to={`/update/${data._id}`} className="btn bg-secondary hover:bg-primary text-white border-none">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn bg-red-500 hover:bg-red-400 border-none text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      ) : (
        // card view
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {campaigns.map((data) => (
            <motion.div key={data._id} className="card border-2 border-primary shadow-lg p-4"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 5 }}
              transition={
                {
                  duration: 0.5,
                  delay: campaigns.indexOf(data) * 0.5

                }
              }
            >
              <img src={data.thumbnail} alt={data.title} className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">{data.title}</h3>
              <p>Deadline: {data.deadline}</p>
              <p>Min Donation: {data.minDonation} BDT</p>
              <div className="flex justify-between mt-4">
                <Link to={`/update/${data._id}`} className="btn bg-secondary hover:bg-primary text-white border-none">
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn bg-red-500 hover:bg-red-400 border-none text-white"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
