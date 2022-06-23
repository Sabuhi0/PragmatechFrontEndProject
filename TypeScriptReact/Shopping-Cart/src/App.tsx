import { createContext, Dispatch, useEffect, useState } from "react";
import Basket from "./components/shopping/Basket";
import Card from "./components/shopping/Card";
import { ShoppingData } from "./types/data";

export const CardContext = createContext<Icard>({
  data: [],
  setData: () => { },
  card: [],
  setCard: () => { }
})

export interface Icard {
  data: ShoppingData[],
  setData: Dispatch<ShoppingData[]>,
  card: ShoppingData[],
  setCard: Dispatch<ShoppingData[]>
}

const App = () => {
  const [data, setData] = useState<ShoppingData[]>([])
  const [card, setCard] = useState<ShoppingData[]>([])

  useEffect(() => {
    fetch('/public/data.json').then(data => data.json()).then(data => console.log(setData(data)))
  }, [])
  return (
    <div className="grid grid-cols-[75%,25%]">
      <CardContext.Provider value={{
        data,
        setData,
        card,
        setCard
      }}>
        <Card />
        <Basket />
      </CardContext.Provider>
    </div>
  )
}

export default App;
