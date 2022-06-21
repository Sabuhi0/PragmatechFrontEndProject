import { useContext, useEffect, useState } from "react";
import { Icard, CardContext } from "../../App";
import { ShoppingData } from "../../types/data";
import Items from "./Items";

const Card = () => {
    const { data } = useContext<Icard>(CardContext)
    return (
        <div className="flex flex-col space-y-3 m-4">
            { data.map(data => <Items key={data.id} data = {data} />) }
        </div>
    )
}

export default Card;
 