<h1>Descrição</h1>
<p> O projeto é um servidor backend feito com nodejs que fornece uma api que recebe até 3 ingredientes e retorna um receitas,provenientes do RecipePuppy (http://www.recipepuppy.com/about/api/)
, juntamente com o Giphy (https://developers.giphy.com/docs/) </p>

<h2>Dependências</h2>
<ul>
  <li>nodejs</li>
  <li>axios</li>
  <li>express</li>
  <li>docker</li>
  <li>dotenv</li>
</ul>

<h2> Rodando a aplicação através do docker</h2>

- construindo a imagem
>sudo docker build --tag tagName:1.0 .    

- rodando o container
>sudo docker run --publish port:3000 --detach --name containerName tagName:1.0
