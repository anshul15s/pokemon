import React from 'react'
import RankCard from './RankCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function TypeC() {
  return (
    <div className= "AppDiv">
      
       <div className=" container-fluid row justify-content-around pt-5" >
            <div className=" col-6 col-sm-4 my-4" style={{ maxWidth: "50%" }}>
                <RankCard  name="Balbasaur" pic={1}/> </div>
            < div className=" col-6 col-sm-4 my-4" style={{ maxWidth: "50%" }}>
                <RankCard  name="Caterpie" pic= {10}/></div>
          
       </div> 
       <div className=" container-fluid row justify-content-around pt-5" >
       <div className=" col-6 col-sm-4 my-4" style={{ maxWidth: "50%" }}>
            <RankCard  name="Metapod" pic={11}/></div>
        <div className=" col-6 col-sm-4 my-4" style={{ maxWidth: "50%" }}>
            <RankCard  name="Voltorb" pic={100} /></div>
          
       </div>
       
      
    </div>
  )
}
