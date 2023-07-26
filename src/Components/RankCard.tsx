import React from 'react'

export default function RankCard(props) {
    let srcNew ="";
    if(props.pic<10){
   srcNew = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00"+props.pic+".png"}
    else if(props.pic<100){
    srcNew = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0"+props.pic+".png"}
    else{
   srcNew = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+props.pic+".png"
    }
    let pokeNew ="";
    if(props.pic<10){
   pokeNew = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00"+props.pic+".png"}
    else if(props.pic<100){
    pokeNew = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0"+props.pic+".png"}
    else{
   pokeNew = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+props.pic+".png"
    }


    let pokeInfo="";
    if(props.pic<10){
   pokeInfo = "https://www.pokemon.com/us/pokedex/"+props.name}
    else if(props.pic<100){
    pokeInfo = "https://www.pokemon.com/us/pokedex/"+props.name}
    else{
   pokeInfo = "https://www.pokemon.com/us/pokedex/"+props.name
    }

    
  return (
    <div >
      <div className="card border border-danger hello ">
  <img src={srcNew} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">I'm a pokemon</p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item ccc">Grass Type</li>
    <li className="list-group-item ccc">Power : {50 + props.pic}</li>
    <li className="list-group-item ccc">Region : Kanto</li>
  </ul>
  <div className="card-body ccc">
    <a href={pokeInfo} className="card-link">Information</a>
    <a href={pokeNew} className="card-link">picture</a>
  </div>
</div>
    </div>
  )
}
