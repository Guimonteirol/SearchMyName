<h1 align="center">SearchMyName Mundo Livre</h1>
</br>

> ## Solicitações de Projeto
- <i>"Criar aplicação React onde o usuário ao digitar um nome pessoal qualquer em um input de texto, consiga o retorno formatado no frontend da maior probabilidade da origem do nome com o nome do país de origem."</i>

<br/>

> ## Sobre o Projeto
- Projeto de Busca de probabilidade da origem do nome, desenvolvido em React, com o consumo das API <a href= "https://nationalize.io"> Nationalize.io </a>, <a href= "https://www.countryflagsapi.com"> CountryFlagsAPI </a> e utilização dos dados do  <a href= "https://gist.github.com/almost/7748738#file-countries-json"> countries.json </a>. Para a estilização do projeto, optei por utilizar o Bootstrap associado ao CSS com o intuito de deixar a página responsiva.
Usei também Icons da biblioteca "react-icons/bs";

<br/>

> ## Lógica e Conceito 
- O nome digitado é encapsulado em uma variável, que é enviada para o serviço que está conectado à api <a href= "https://nationalize.io"> Nationalize.io </a>, onde é feita a busca e um objeto é retornado
com as probabilidades e os códigos dos países, que são filtrados e capturados para serem tratados no front. Utilizo os dados do <a href= "https://gist.github.com/almost/7748738#file-countries-json"> countries.json </a> para retornar o nome do país através do código (code). Com essas informações em mãos consigo retornor o país de maior probabilidade.
Como adicional, resolvi trazer também, os 3 principais países reservando-os em um array, que alimenta o front-end dinamicamente. Além disso, utilizei a api <a href= "https://www.countryflagsapi.com"> CountryFlagsAPI </a>  para retornar a bandeira dos países com maior probabilidade.

<br/>

> ## Funcionalidades 
- Encontrar país com maior probabilidade;

<br/>

> ## Funcionalidades Adicionais
- Retorno dos três países com maior probabildiade;
- Consumo da api <a href= "https://www.countryflagsapi.com"> CountryFlagsAPI </a> para rotorno das bandeiras de cada país;
- Layout Responsivo;
- Cálculo da porcentagem dos respectivos países;

<br/>

> ## Demonstração
<img src="https://github.com/Guimonteirol/SearchMyName/tree/master/public/gif">

<br/>

> ## Tecnologias
<p align="left">
<img alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img alt="git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
<img alt="bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
 </p>

<br/>

> ## Como iniciar esse projeto

    # Clone this repo
    ❯ git clone https://github.com/Guimonteirol/mundo_livre.git

    # Enter on its directory
    ❯ cd front

    # Launch the Application    
    ❯ npm start

<br/>

> ## Autor do Projeto
<a href="https://www.linkedin.com/in/guilhermemonteirol/"> Guilherme Monteiro - Linkedin</a>
