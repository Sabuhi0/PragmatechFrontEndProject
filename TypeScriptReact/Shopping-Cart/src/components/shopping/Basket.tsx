import React from 'react';
import { useContext } from 'react';
import { CardContext } from '../../App';

const Basket = () => {
    const { card } = useContext(CardContext)
    return (
        <div className='min-h-screen bg-gray-500'>
            {
               card.length !== 0 ?  card.map(item => 
                <div className='p-2 m-2 bg-white rounded-md'>
                    <div className='flex items-center justify-start'>
                        <div className=''>
                            <img className='w-full' src={item.image} alt="" />
                        </div>
                        <div className='flex justify-center w-full'>
                            <ul className='flex flex-col space-y-5'>
                                <li className='text-[25px]'>Name: <span className='text-[20px] font-bold'>{item.name}</span></li>
                                <li className='text-[25px]'>Size: <span className='text-[20px] font-bold'>{item.size}GB</span></li>
                                <li className='text-[25px]'>Color: <span className='text-[20px] font-bold'>{item.color}</span></li>
                                <li className='text-[25px]'>Price: <span className='text-[20px] font-bold'>{item.price}$</span></li>
                            </ul>
                        </div>
                    </div>
                </div>) : <h1 className='mt-2 text-5xl font-semibold text-center text-white'>The basket is empty</h1>
            }
        </div>
    )
}

export default Basket;
