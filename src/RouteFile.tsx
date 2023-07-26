import React,{useState} from 'react'
import {BrowserRouter,Routes,Route,Outlet, useNavigate } from 'react-router-dom'
import RankBar from './Components/RankBar'
import App from './App'
import TypeC from './Components/TypeC'
import './App.scss';


// let s=' ';

export default function RouteFile() {
    const [searchClick, setSearchClick] = useState<string>('');
  
  const MainB=()=>{
    const [searchCard, setSearchCard] = useState<string>('');
    // setSearchClick('')
    const navg = useNavigate(); 

    const searchFun= ()=>{
        setSearchClick(searchCard);
        // setSearchCard(' ');
        // console.log(searchCard);
        // console.log(searchClick);
        // console.log(s);
        // setTimeout(() => setSearchClick(searchCard), 0);
        setSearchCard('');
        navg(' ');
        // console.log(searchCard)
      }

    return(
    <div className="Appdiv">
    <RankBar handleSearch = {(event )=>setSearchCard(event.target.value)} clickSearch = {()=> searchFun() }/>
    <Outlet/>
    </div>
    )

  }

  // useEffect(() => {
  //   RouteFile();
  // },[searchClick])

  return (
    <BrowserRouter>
    
    <Routes>
        <Route  path="/" element={<MainB/>}>   
            <Route index element={<App prop ={searchClick}/>}/>
            <Route  path="types" element={<TypeC/>} />
        </Route>
    </Routes>
   
    </BrowserRouter>
  )
}
