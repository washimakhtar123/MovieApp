import React from 'react'
import { IoMdClose } from "react-icons/io";
import useFetchDetail from '../hooks/useFetchDetail';

const VideoPlay = ({data,close,media_type}) => {
  const {data:VideoData}=useFetchDetail(`/${media_type}/${data?.id}/videos`)
  console.log("VideoData",VideoData)
  return (
   <section className='fixed bg-neutral-700 top-6 right-0 bottom-0 left-0 z-80 bg-opacity-50 flex justify-center items-center'>
    <div className='bg-black w-full max-h[80vh] max-w-screen-lg aspect-video rounded relative'>
      <button
      className='absolute -right-1 -top-4 text-3xl z-50 '
      onClick={close}>
      <IoMdClose/>
      </button>
      <iframe src={`https://www.youtube.com/embed/${VideoData?.results[0]?.key}`}
      className='w-full h-full' 
      />
    </div>
   </section>
  )
}

export default VideoPlay
 