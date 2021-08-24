import '../App.css';
import { useState, useEffect } from 'react';
import { contract } from '../ropsten.infura';
import { Element } from './item'
import { Index } from '../interfaces'

interface listIndexes {
  list: number[]
}

export function ItemList(props : listIndexes) {
  const [itemList, setItemList] = useState<Index[]>([]);

  useEffect(() => {
    props.list.map(e => 
      contract.methods.getIndex(e).call((err: string, result: Index) => { 
        setItemList(prev => [...prev, result])
      }
    ))
  }, [props.list])

  return (
    <div className="list-items">
      {itemList.map((e: Index) => (
        <div key={e.name}>
         <Element element={e}/>
        </div>
      ))}
    </div>
  );
}
