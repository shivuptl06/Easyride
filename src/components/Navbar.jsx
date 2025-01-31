/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";
import PropTypes from 'prop-types';

const auth = getAuth(app);
const db = getFirestore(app);

const Navbar = ({ role, setRole }) => {
  const navigate = useNavigate();

  const toggleRole = async () => {
    const newRole = role === "driver" ? "passenger" : "driver";
    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), { role: newRole });
      setRole(newRole);
      navigate(newRole === "driver" ? "/driver-dashboard" : "/dashboard");
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <nav>
          <Link to="/dashboard" className="mr-4 text-blue-500 hover:underline">Home</Link>
          <Link to="/bookings" className="mr-4 text-blue-500 hover:underline">Bookings</Link>
          {role === "driver" && (
            <Link to="/manage-bookings" className="mr-4 text-blue-500 hover:underline">Manage Bookings</Link>
          )}
          <button
            onClick={toggleRole}
            className="ml-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Switch to {role === "driver" ? "Passenger" : "Driver"} Dashboard
          </button>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  role: PropTypes.string.isRequired,
  setRole: PropTypes.func.isRequired,
};

export default Navbar;