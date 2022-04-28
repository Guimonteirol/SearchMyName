import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api'


function App() {
  
  const [input, setInput] = useState('');
  const [data, setData] = useState({});
  const [nameofCountry, setCountry] = useState('');//array com com name e probabilyt
  const [probabofCountry, setProbabilyt] = useState('')
  const [countries, setContries] = useState([]); //.json

  useEffect(()=>{
    fetch('./countries.json', {
      headers:{
        Accept: "application/json"
      }
    }).then(res => res.json())
    .then(res => setContries(res));
  })

  async function handleSearch(){
    if(input === ''){
      alert("Peencha um nome");
      return;
    }

    try{
      const response = await api.get(`?name=${input}`)
      setData(response.data)
      const nameCountry = response.data.country[0].country_id;
      const probability = response.data.country[0].probability
      setProbabilyt(probability)
      console.log(nameCountry)
      console.log(countries)
      for(let country of countries.countries){
        if(nameCountry === country.code){
          setCountry(country.name);
        }
      }
      setInput("")
    }catch(e){
      alert(e)
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscar Nome</h1>
      
      <div className="containerInput">
      <input type="text" placeholder="Digite seu nome..." value={input}
       onChange={(e) => setInput(e.target.value)}  />

      <button className="buttonSearch" onClick={handleSearch}>
      <FiSearch size={25} color="FFF" />
    </button>
      </div>

      <main className='main'>
      <h2>O nome escolhido: {data.name}</h2>
      {/* {data.country.map(e => (
        <h1>{e.probability}</h1>
      ))} */}
      {/* <h1>{data.country[0].probability}</h1> */}
      <h1>O país com maior probablidade de origem é: {nameofCountry}</h1>
      <h1>A probabilidade:{probabofCountry} </h1>
    </main>
    </div>

    
  );
}

export default App;
