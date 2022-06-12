import React from 'react';

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#111418]">
            <img className="w-full object-cover" src={image.webformatURL} alt="" />
            <div className="px-6 py-4">
                <div className="font-bold text-white text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul className='text-white'>
                    <li>
                        <strong className='text-[#ffffff80]'>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong className='text-[#ffffff80]'>Like: </strong>
                        {image.likes}
                    </li>
                    <li>  
                        <strong className='text-[#ffffff80]'>Downloads: </strong>
                        {image.downloads}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {
                    tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-[#D4E0E2] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            #{tag}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageCard;
