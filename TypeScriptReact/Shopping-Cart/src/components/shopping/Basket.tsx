import React from 'react';
import { useContext } from 'react';
import { CardContext } from '../../App';

const Basket = () => {
    const { card } = useContext(CardContext)

    return (
        <div className='bg-gray-500'>
            {
                card.map(s => <div key={s.id}>{s.price}$</div>)
            }
        </div>
    )
}

export default Basket;
