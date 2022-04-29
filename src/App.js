/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { api } from './services/api'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowDown } from "react-icons/bs";

function App() {
  const [input, setInput] = useState(''); // nome digitado pelo usuário
  const [data, setData] = useState({}); // conteúdo vindo da api
  const [nameOfCountry, setCountry] = useState('');// nome do país com maior probabilidade
  const [probabOfCountry, setProbabilyt] = useState('') // maior probabilidade
  const [flagOfCountry, setFlag] = useState('') // bandeira do país com maior probabildiade
  const [percentOfCountry, setPercent] = useState('') // porcentagem do país com maior probabildiade
  const [countries, setContries] = useState([]); //contem o .json
  const [valida, setValida] = useState({}) // variável para mostrar campos com outros países
  const [namesOfCountries, setCountriesNames] = useState([]) // vetor que contém nome dos principais países

  useEffect(() => { 
    fetch('./countries.json', { //acessa arquivo .json
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res => setContries(res));//atribui o conteúdo à variável "countries"
  })

  async function openSearch() { //abre resultado da pesquisa
    if (input === '') {
      alert("Peencha um nome");
      return;
    }
    try {
      const response = await api.get(`?name=${input}`) //envia valor do nome para o endpoint
      setData(response.data)
      //variáveis com a maior probabilidade e país
      const nameCountry = response.data.country[0].country_id;
      const probability = response.data.country[0].probability;
      const flag = `https://countryflagsapi.com/png/${nameCountry.toLowerCase()}` //endpoint para pegar bandeira

      const percent = probability.toFixed(2) * 100 //calcula porcentagem

      setPercent(percent)
      setFlag(flag)
      setProbabilyt(probability)
      for (let country of countries.countries) { //traz o 'name' do país através do 'code' no .json
        if (nameCountry === country.code) {
          setCountry(country.name);
        }
      }
      setInput("") //limpa input
    } catch (e) {
      console.log(e)
      setInput("")
    }
    setValida(0) //limpa os dados do objeto da pesquisa anterior
  }

  async function openCountries() { //abre lista dos principais países
    setValida(data) //preenche objeto de validação para abrir novo resultado de pesquisa
    const vetor = []; // vetor que contém nome dos principais países
    for (let country of data.country) {
      let nameCountry = country.country_id
      for (let country of countries.countries) { //traz o 'name' do país através do 'code' no .json
        if (nameCountry === country.code) {
          vetor.push(country.name)
          setCountriesNames(vetor);
        }
      }
    }
  }

  return (
    <div className="App">
      <h1 className="title mt-4">SearchMyName</h1>
      <div className="containerInput d-flex mt-3" >
        <input className="input-group-text" type="text" placeholder="Digite seu nome..." value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button type="button" className="buttonSearch btn btn-dark " data-bs-toggle="tooltip" data-bs-placement="top" title="Pesquisar" onClick={openSearch}>
          <FiSearch size={25} color="FFF" />
        </button>
      </div>
      <p className="footer text-muted">Created by Guilherme Monteiro</p>

      {Object.keys(data).length > 0 && ( //verifica se há conteúdo no objeto para ser mostrado
        <main className='main m-4'>
          <div className="card shadow-lg">
            <h5 className="card-header text-center">{data.name}</h5>
            <div className="card-body p-4">
              <h5 className="card-title">País com maior probablidade de origem: <p className='text-center mt-2 mb-0 text-uppercase text-success'>{nameOfCountry}</p></h5>
              <div className='mb-4 d-flex justify-content-center'>
                <img src={`${flagOfCountry}`} width="35" alt="description of image" />
              </div>
              <p className="card-text text-center ">A probabilidade é: <span className='fw-bold'>{probabOfCountry.toFixed(4)}</span> ou <span className='fw-bold'>{percentOfCountry.toFixed(0)}% </span></p>
              <div className=' d-flex justify-content-center'>
                <button className="btn btn-success px-4 py-2 text-uppercase" data-bs-toggle="tooltip" data-bs-placement="top" title="3 países mais prováveis"
                  onClick={openCountries}>Principais países <BsArrowDown size={20} color="FFF"/></button>
              </div>
            </div>
          </div>
        </main>
      )}

      {Object.keys(valida).length > 0 && ( //verifica se há conteúdo no objeto para ser mostrado
        <div className="card shadow-lg mb-5">
          <h5 className="card-header text-uppercase">Principais Países:</h5>
          <div className="card-body countries gap-5 d-flex">
            <span className='text-center d-block'>
              {namesOfCountries.map(country => (
                <p className='d-flex text-uppercase '>{country}</p>
              ))}
            </span>
            <span className='text-center d-block'>
              {data.country.map(e => (
                <p className="card-text mx-auto">{e.probability.toFixed(4)} | {(e.probability.toFixed(2) * 100).toFixed(0)}% </p>
              ))}
            </span>
          </div>
        </div>
      )}

    </div>
  );


}

export default App;
