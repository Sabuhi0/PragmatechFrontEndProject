import React, { useContext } from 'react';
import { CardContext } from '../../App';
import { ShoppingData } from "../../types/data";


const Items = ({ data }: {data: ShoppingData}) => {
    const { card, setCard } = useContext(CardContext)

    const click = (id: number) => {
        if(!card.some(s => s.id === id)) {
            setCard([...card, data])
        }
    }

    return (
        <div className='bg-gray-300 shadow-lg border rounded-md flex justify-between px-5'>
        <div className='flex flex-col space-y-2 p-3'>
            <img src={data.image} width={50} />
            <h1>{data.name}</h1>
            <h1>{data.size}GB</h1>
            <h1>{data.price}$</h1>
            <h1>{data.color}</h1> 
        </div>
        <div className=''>
            <button onClick={() => click(data.id)}>
                Add to the card
            </button>
        </div>
        </div>
    )
}

export default Items;
