/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function ImageCard(props) {
    const { image } = props

    const tags = image.tags.split(',');



    return(
        <div className='max-w-sm rounded overflow-hidden shadow-lg' >
        <img src={image.webformatURL} alt="" className='w-full ' />
        <div>
        <div className='font-bold  text-purple-500 text-xl mt-5 ml-5'>
                 Photo by {image.user}
             </div>
  
             <ul className='mt-5 ml-5'>
                 <li>
                   <strong>Views: </strong>
                   {image.views}
                 </li>
  
                 <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                 </li>
  
                 <li>
                     <strong>Likes: </strong>
                     {image.likes}
                 </li>
             </ul>
        </div>
  
        <div className='px-6 py-4'>
            {tags.map((tag) => (
                             <><span className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2'>
                    {tag}
                </span>
          </>
            ))}
        </div>
      </div>
    )
}

export default ImageCard