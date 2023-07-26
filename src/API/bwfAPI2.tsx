import axios from "axios";


export async function bwfAPIFun2(){
   
    
    

    const options = {
      method: 'GET',
      url: 'https://pokemon-go1.p.rapidapi.com/pokemon_names.json',
      headers: {
        'X-RapidAPI-Key': '1090ac3600msh70e9678dfb9c4aap1b5145jsn28bafbea22c0',
        'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com'
      }
    };
    
    const response = await axios.get(options.url, { headers: options.headers})
    //   console.log(response)  ;
    return response;

    
    
}