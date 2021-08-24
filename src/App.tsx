import './App.css';
import { contract } from './ropsten.infura';
import { useState, useEffect } from 'react';
import { ItemList } from './Components/itemList'
import { Group } from './interfaces'

function App() {

  const [groupList, setGroupList] = useState<number[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => contract.methods.getGroupIds().call((err: string, result: number[] ) =>  setGroupList(result)), [])

  useEffect(() => {
    groupList.map((e : number) => contract.methods.getGroup(e).call((err: string, group : Group) => setGroups(prev => [...prev, group])))
  }, [groupList])


 
  
  return (
    <>
      <div className="header logo">
        Logotype
        <button className="button">Connect wallet</button>
      </div>

      <div className="header-font">All Indeces</div>

      {groups.map((e) => (
        <div className="list-wrapper" key={e[0]}>
          <div className="title-font">{e[0]}</div>
          <ItemList list={e.indexes}/>
        </div>
      ))}
    </>
  );
}

export default App;
