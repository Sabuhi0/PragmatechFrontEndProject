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
        <div className='flex justify-between px-5 bg-gray-300 border rounded-md shadow-lg h-[250px]'>
        <div className='flex flex-col p-3 space-y-2'>
            <img src={data.image} width={50} />
            <h1>{data.name}</h1>
            <h1>{data.size}GB</h1>
            <h1>{data.price}$</h1>
            <h1>{data.color}</h1> 
        </div>
        <div>
            <button onClick={() => click(data.id)}>
               { card.some(s => s.id === data.id) ? <IoMdRemoveCircle size={40} /> : <MdOutlineAdd size={40} /> }
            </button>
        </div>
        </div>
    )
}

export default Items;
