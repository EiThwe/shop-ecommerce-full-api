import React from 'react'
import Lottie from "lottie-react";
import LoadingAnimation from "../images/loading.json"
const Loading = () => {
  return (
    <div className='flex justify-center items-center p-[100px]'>
        <Lottie animationData={LoadingAnimation} loop={true} className="w-72" />
    </div>
  )
}

export default Loading