
# List Repository GitHub

Trata-se de uma aplicação que usa a API do github para a **listagem de repositórios**. Uma API voltada para possibilidade
de listagem de repositórios de um determinado usuário e também de repositórios marcados
com **estrela**.


### **📋 Pré-requisitos**

Para executar o projeto, será necessário instalar os seguintes programas:

💡 - Node js 14 ou versões superiores - Angular/cli 12 ou versões superiores


****🔧 Construção****

Para instalar as dependências do projeto, executar o comando abaixo:

```angular
 npm i ou npm install
```
O comando irá baixar todas as dependências do projeto e criar um diretório *node_modules*
 com os pacotes instalados. Além disso se a instalação de algum pacote *falhar*,
 será exibido essa informação no console.

Para executar o projeto, executar o comando abaixo:

```angular
 npm start ou ng serve
```
O comando irá compilar todas as dependências e rodar o projeto. Além disso, será
exibido no console a informação de *sucesso* ou *falha* e onde está sendo hospedado. Normalmente
sendo hospedado em `http://localhost:4200/`. Navegue até o endereço para a exibição.

**Lembrete:** A aplicação irá fazer reload da página a partir de qualquer atualização do código. 

 **Lembrete:** Pode haver a possibilidade do comando não rodar a depender do terminal. Em caso de estar usando o terminal
da **PowerShell** utilize o comando *npm start*.

## Testes

Para rodar os testes, utilize o comando abaixo:

```angular
npm test ou ng test
```
O comando irá compilar os testes e irá abrir um *navegador* para a exibição dos testes criados.
Além disso será exibido no console e no navegador informações sobre o *status* dos testes. Se houve **sucesso**
ou **falha**.
## Documentação

Para ter acesso a documentação, utilize o comando abaixo:

```angular
npm run compodoc:build-and-serve
```
O comando irá construir a documentação *atualizada* e rodar em seguida. Além disso será exibido
no console onde será hospedado para a visualização. Normalmente sendo em `http://localhost:8080/`.


## Cloud

O deploy do projeto foi feito no Vercel, uma plataforma de nuvem muito versátil para pequenas aplicações.
Segue abaixo o link para a visualização do projeto hospedado.

https://list-rep-github.vercel.app/