import { useContext } from 'react';
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
        <div className='flex flex-col justify-between p-5 bg-gray-300 border rounded-md shadow-lg overflow-hidden'>
            <div className='p-3 space-y-2'>
                <img src={data.image} className='w-[100%]' />
            </div>
            <div className='pl-3'>
                <ul>
                    <li className='text-2xl'>Name: <span className='font-semibold'>{data.name}</span></li>
                    <li className='text-2xl'>Size: <span className='font-semibold'>{data.size}GB</span></li>
                    <li className='text-2xl'>Color: <span className='font-semibold'>{data.color}</span></li>
                    <li className='text-2xl'>Price: <span className='font-semibold'>{data.price}$</span></li>
                </ul>
            </div>
            <div className='flex justify-end'>
                <button className='border rounded p-3 mt-2 flex items-center hover:bg-slate-400 hover:text-white transition-all' onClick={() => click(data.id)}>
                    {card.some(s => s.id === data.id) ? 'Remove from the card' : 'Add to the card'}
                    <span className='pl-1'>{ card.some(s => s.id === data.id) ? <IoMdRemoveCircle size={20} /> : <MdOutlineAdd size={20} /> }</span>
                </button>
            </div>
        </div>
    )
}

export default Items;
