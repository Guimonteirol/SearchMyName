import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from '../services/api'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState({});
  const [nameofCountry, setCountry] = useState('');
  const [probabofCountry, setProbabilyt] = useState('')
  const [countries, setContries] = useState([]); //contem o .json
  const [valida, setValida] = useState({})
  const [namesOfContrys, setContrys] = useState([])

  useEffect(() => {
    fetch('./countries.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res => setContries(res));
  })

  async function handleSearch() {
    if (input === '') {
      alert("Peencha um nome");
      return;
    }
    try {
      const response = await api.get(`?name=${input}`) //enviando valor do nome para o endpoint
      setData(response.data)
      //variáveis com a maior probabilidade e país
      const nameCountry = response.data.country[0].country_id;
      const probability = response.data.country[0].probability;

      setProbabilyt(probability)
      for (let country of countries.countries) { //trazendo o 'name' do país através do 'code'
        if (nameCountry === country.code) {
          setCountry(country.name);
        }
      }
      setInput("") //limpando input
    } catch (e) {
      alert(e)
      setInput("")
    }
    setValida(0) //zerando variável que abre lista de principais países 
  }

  async function openCountries() {
    setValida(data) //preenchendo objeto de validacao para abrir nova <div>
    const vetor = [];
    for (let country of data.country) {
      let nameCountry = country.country_id
      for (let country of countries.countries) { //trazendo o 'name' do país através do 'code'
        if (nameCountry === country.code) {
          vetor.push(country.name)
          setContrys(vetor);
          console.log(namesOfContrys)
        }
      }
    }
  }

  return (
    <div className="App">
      <h1 className="title mt-4">Buscar Nome</h1>
      <div className="containerInput d-flex mt-3" >
        <input className="input-group-text" type="text" placeholder="Digite seu nome..." value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button type="button" className="buttonSearch btn btn-dark" onClick={handleSearch}>
          <FiSearch size={25} color="FFF" />
        </button>
      </div>

      {Object.keys(data).length > 0 && ( //verificando se há conteúdo no objeto para ser mostrado
        <main className='main m-4'>
          <div className="card shadow-lg ">
            <h5 className="card-header text-center ">{data.name}</h5>
            <div className="card-body">
              <h5 className="card-title">O país com maior probablidade de origem é: <p className='text-center mt-2 text-uppercase'>{nameofCountry}</p></h5>
              <p className="card-text">A probabilidade: {probabofCountry}</p>
              <button className="btn btn-dark"onClick={openCountries}>Principais países</button>
            </div>
          </div>
        </main>
      )}
      {Object.keys(valida).length > 0 && (
        <div className="card shadow-lg mb-5">
          <h5 className="card-header">Principais Países:</h5>
          <div className="card-body countries d-block">
            <div className='d-flex'>
              {namesOfContrys.map(country => (
                <p className='d-flex mx-3 text-uppercase'>{country}</p>
              ))}
            </div>
            <div>
              {data.country.map(e => (
                <div className="card-body">
                  <h5 className="card-title">{e.country_id}</h5>
                  <p className="card-text">Probabilidade: {e.probability} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
