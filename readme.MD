# App de Ficha Catalográfica

## Objetivo do projeto
O objetivo do projeto é ser uma página de formulário que gera um arquivo PDF após ter todas as informações preenchidas.

## Techs utilizadas
A base do projeto é ReactJS com Typescript.
Para fazer a estilização foi utilizado o *styled-components*
Também utilizei a biblioteca *React-Pdf* para gerar os pdfs (inclusive foi a biblioteca que mais me deu trabalho nesse projeto).
Utilizei o *react-router-dom* para gerenciar as rotas.

## Problemáticas encontradas
Bem, no fim das contas, o maior dos problemas foi a biblioteca *React-Pdf*. Eu já tinha construído todo um projeto utilizando *Vite* e o *React* na versão 18, porém, o *React-Pdf* não dá suporte a essa versão do *React*, e eu só descobri isso quando fui fazer o deploy no Heroku. <br>
Foi um martírio, porque além de tudo, o *Vite* também não suporta o *React-Pdf*, então depois de eu tentar fazer o deploy da primeira versão do projeto, tudo parou de funcionar.<br>
Para resolver tudo tive que utilizar a versão 16.14 do *React* para que o *React-Pdf* funcionasse corretamente. Depois ainda tive que utilizar o Craco porque tive problemas com o webpack.<br>
No fim das contas, tudo se resolveu e eu finalmente consegui fazer o deploy do app e aprendi que as versões das bibliotecas podem dar realmente muuuita dor de cabeça kkkkk
