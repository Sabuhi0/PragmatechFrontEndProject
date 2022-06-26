import React, { useContext } from 'react';
import { CardContext } from '../../App';
import { ShoppingData } from "../../types/data";
import { MdOutlineAdd } from 'react-icons/md';
import { IoMdRemoveCircle } from 'react-icons/io'


const Items = ({ data }: {data: ShoppingData}) => {
    const { card, setCard } = useContext(CardContext)

    const click = (id: number) => {
        if(!card.some(s => s.id === id)) {
            setCard([...card, data])
        } else {
            setCard(card.filter(s => s.id !== id))
        }
    }

    return (
        <div className='flex justify-between px-5 bg-gray-300 border rounded-md shadow-lg h-[300px] overflow-hidden'>
            <div className='flex flex-col p-3 space-y-2'>
                <img src={data.image} className='w-[100%] h-full object-cover' />
            </div>
            <div>
                <button className='border rounded p-3 mt-2 flex items-center hover:bg-slate-400 hover:text-white' onClick={() => click(data.id)}>
                    {card.some(s => s.id === data.id) ? 'Remove from the card' : 'Add to the card'}
                    <span className='pl-1'>{ card.some(s => s.id === data.id) ? <IoMdRemoveCircle size={20} /> : <MdOutlineAdd size={20} /> }</span>
                </button>
            </div>
        </div>
    )
}

export default Items;
