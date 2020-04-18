<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/RossiniM/recipe-api.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/RossiniM/recipe-api.svg">
  
  <a href="https://www.codacy.com/app/RossiniM/recipe-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=RossiniM/recipe-api&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/70c8e79c83b442278f6c276ebf117ae4.svg">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/RossiniM/recipe-api.svg">
  <a href="https://github.com/RossiniM/recipe-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/RossiniM/recipe-api.svg">
  </a>
  
  <a href="https://github.com/RossiniM/recipe-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/RossiniM/recipe-api.svg">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/RossiniM/recipe-api.svg">   
</p>

<h1>Descrição</h1>
<p> O projeto é um servidor backend feito com nodejs que fornece uma api que recebe até 3 ingredientes e retorna um receitas,provenientes do RecipePuppy (http://www.recipepuppy.com/about/api/)
, juntamente com o Giphy (https://developers.giphy.com/docs/) </p>

<h2>Pacotes usados</h2>
<ul>
  <li>nodejs</li>
  <li>axios</li>
  <li>express</li>
  <li>docker</li>
  <li>dotenv</li>
</ul>

<h2> Rodando a aplicação local </h2>
<p> A aplicação pode ser rodada através da instalação das dependências ou utilização de um container(docker) para roda-lás.

<h3>Instalar e rodar as dependências</h3>

>sudo npm install
>sudo npm start
 
<h3> Utilizando o Docker</h3>
- construi a imagem

>sudo docker build --tag tagName:1.0 .    

- rodar o container

>sudo docker run --publish port:3000 --detach --name containerName tagName:1.0
<h2> Exemplos de requisição</h2>


