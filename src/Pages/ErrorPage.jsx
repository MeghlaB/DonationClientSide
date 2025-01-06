import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="bg-base-200 h-screen flex flex-col justify-center items-center px-6">
      <dotlottie-player
        src="https://lottie.host/70d6a829-9390-48ed-a1e1-1ca92596c9b6/zl5d2F4nSV.lottie"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></dotlottie-player>
      <h1 className="text-2xl font-bold text-violet-700 mt-4">No Page Found!</h1>
      <Link to="/" className="btn btn-primary mt-4">Go Home</Link>
    </div>
  );
}
