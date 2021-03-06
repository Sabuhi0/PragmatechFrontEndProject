import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className='max-s-sm rounded overflow-hidden py-10 mx-auto'>
            <form onSubmit={onSubmit} className='w-full flex justify-center'>
                <div className='flex items-center border-b-2 border-teal-500 py-2'>
                    <input onChange={e => setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder='Search Image Term...' />
                    <button className='flex-shrink-0 bg-[#20C997] border-[#20C997] hover:border-[#1CAD82] hover:bg-[#1CAD82] text-sm border-4 text-white py-1 px-2 rounded' type='submit'>Search</button>
                </div>
            </form>
        </div>
    ) 
}

export default ImageSearch;
