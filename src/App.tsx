//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';
// import RankBar from './Components/RankBar';
import RankCard from './Components/RankCard';
import { bwfAPIFun2 } from './API/bwfAPI2';
import React, { useState, useEffect } from 'react';



interface pokeid{
  name : string;
  id : number;
}
type poke =pokeid[]

const DisplayCards: React.FC<{pokemon : poke}> =(pokemons)=> {
  return(
    <>
    {pokemons.pokemon.map(obj  => 
    <li className=" col-4 col-sm-3 my-4" style={{ maxWidth: "40%" }} key={obj.id}>    
        <RankCard name={obj.name} pic={obj.id} />
    </li>
    )}
    </>
  )
}

 const App: React.FC<{prop : string}> =(aprop)=>{

  const [count, setCount] = useState<poke>([]);
  // const [searchCard, setSearchCard] = useState('');
  // const [searchClick, setSearchClick] = useState('');
  // const searchBar = aprop;

  //console.log(aprop.prop);
  
  const API = async () => {
    let pokes = await bwfAPIFun2();
    console.log(pokes);
    let myData : poke  = Object.keys(pokes.data).map(key => {
      return pokes.data[key];
      
    });
    if(aprop.prop !== ' '){
      let myNewData : poke  = myData.filter(str => str.name.includes(aprop.prop));
      setCount(myNewData);
      console.log(count);
    }
    else{
      setCount(myData);
    }
  };
  
  // API();
  
  useEffect(() => {
    API();
  },[aprop.prop]);

  return (
    <div className="AppDiv">
     {/* <RankBar handleSearch = {(event)=>setSearchCard(event.target.value)} clickSearch = {()=>setSearchClick(searchCard)}/> */}
       <div className=" container-fluid row justify-content-around pt-5" >
          <DisplayCards pokemon={count}/>
       </div>   
    </div>
  );
}

export default App;
